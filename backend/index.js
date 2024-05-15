import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { sequelize, table } from './dataBase.js';

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());
app.use(cors());

sequelize.sync();

app.get('/', (req, res) => {
  sendTable().then((response) => {
    res.send(response);
  });
});

app.post('/set', (req, res) => {
  pushIntoTable(req.body);
  res.send('ok');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await table.findOne({ where: { email } });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: '1h',
      });
      res.json({ token });
    } else {
      res.status(401).send('Невірний пароль');
    }
  } else {
    res.status(404).send('Користувач не знайдений');
  }
});

app.post('/register', async (req, res) => {
  const { name, email, gender, dob, password } = req.body;
  const existingUser = await table.findOne({ where: { email } });
  if (existingUser) {
    return res.status(400).send('Користувач з таким email вже існує');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await table.create({ name, email, gender, dob, password: hashedPassword });
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`server has been started on port ${PORT}...`);
});

function sendTable() {
  return table.findAll().then((res) => {
    let itemsArray = { items: [] };
    res.forEach((element) => {
      itemsArray.items.push(element.dataValues);
    });
    return itemsArray;
  });
}

function pushIntoTable(req) {
  clearTable().then(() => {
    req.curentUser.contacts.forEach((item) => {
      table.create({
        name: item.name,
        tel: item.tel,
        place: item.place,
        email: item.email,
        password: item.password
      });
    });
  });
}

function clearTable() {
  return table.destroy({
    where: {},
    truncate: true,
  });
}
