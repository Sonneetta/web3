import React from 'react';
import Navbar from './Navbar';

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="jumbotron custom-jumbotron">
        <div className="container">
          <h1 className="hello">Ласкаво просимо до Bashly.com!</h1>
          <p className="about">На сторінці "Про нас" нашого веб-сайту ви знайдете усю необхідну інформацію про те, хто ми є і яка наша місія. Bashly.com - це місце, створене для тих, хто захоплений подорожами та бажає зберегти свої враження назавжди.</p>
          <p className="about">Наша команда складається з ентузіастів подорожей, які пристрасно вивчають та досліджують найцікавіші куточки світу. Ми розуміємо, що кожна подорож - це унікальний досвід, який варто зберегти в пам'яті назавжди. Тому ми створили Bashly.com - місце, де ви зможете записати свої враження про відвідані країни та міста.</p>
          <p className="about">На нашому веб-сайті вас чекають різноманітні опитування, які допоможуть вам описати ваші враження від подорожей, відзначити найцікавіші моменти та занотувати витрати. Ми віримо, що кожен має свою унікальну історію подорожі, і ми допоможемо вам зберегти ці спогади назавжди.</p>
          <p className="about">Приєднуйтесь до нашої спільноти подорожників, діліться своїми пригодами та досвідом, а також знаходьте натхнення для нових подорожей. З Bashly.com ваші подорожі стануть ще яскравішими та незабутніми!</p>
          <p className="about_down">Якщо у вас виникли питання або ви бажаєте з нами співпрацювати, будь ласка, зв'яжіться з нами за електронною адресою contact@bashly.com.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;