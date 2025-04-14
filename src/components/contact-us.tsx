import React, { useState, FormEvent } from 'react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreement) {
      alert('Будь ласка, погодьтеся з умовами!');
      return;
    }
    console.log({
      name,
      email,
      phone,
      topic,
      message,
    });
    alert('Форма відправлена!');
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '18px',
    fontFamily: 'Roboto, normal',
    fontWeight: 'bold',
    color: '#000',
  };

  const headerTitleStyle: React.CSSProperties = {
    fontSize: '36px',
    fontFamily: 'Roboto, normal',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const headerTextStyle: React.CSSProperties = {
    fontSize: '16px',
    fontFamily: 'Roboto, normal',
    color: '#666',
  };

  const contactInfoItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Roboto, normal',
    fontSize: '16px',
    margin: '10px 0',
  };

  const iconStyle: React.CSSProperties = {
    marginRight: '10px',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    marginBottom: '5px',
    fontFamily: 'Roboto, normal',
  };

  const inputStyle: React.CSSProperties = {
    padding: '10px',
    fontFamily: 'Roboto, normal',
    border: '1px solid Black', 
    borderRadius: '20px', 
    fontSize: '14px',
    height: '40px',
  };

  const selectStyle: React.CSSProperties = {
    padding: '10px',
    fontFamily: 'Roboto, normal',
    border: '1px solid Black',
    borderRadius: '20px', 
    fontSize: '14px',
    height: '40px',
  };

  const textareaStyle: React.CSSProperties = {
    padding: '10px',
    fontFamily: 'Roboto, normal',
    border: '1px solid Black', 
    borderRadius: '20px', 
    fontSize: '14px',
    height: '100px',
    resize: 'none',
  };

  const radioGroupStyle: React.CSSProperties = {
    display: 'flex',
    fontFamily: 'Roboto, normal',
    flexDirection: 'column',
    gap: '10px',
  };

  const radioLabelStyle: React.CSSProperties = {
    display: 'flex',
    fontFamily: 'Roboto, normal',
    alignItems: 'center',
    fontSize: '14px',
  };

  const radioInputStyle: React.CSSProperties = {
    marginRight: '10px',
    fontFamily: 'Roboto, normal',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontFamily: 'Roboto, normal',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-[112px_20px] flex flex-col md:flex-row gap-10">
      <div className="flex-1 text-center md:text-left">
        <div style={logoStyle}>DivasTeam</div>
        <h1 style={headerTitleStyle}>Зв'яжіться з нами</h1>
        <p style={headerTextStyle}>
          Наші дружні команди будуть радий отримати від вас влучку.
        </p>
        <div className="space-y-4">
          <p style={contactInfoItemStyle}>
            <span style={iconStyle}>✉️</span> hello@divass.io
          </p>
          <p style={contactInfoItemStyle}>
            <span style={iconStyle}>📞</span> +380 (090) 000-0000
          </p>
          <p style={contactInfoItemStyle}>
            <span style={iconStyle}>📍</span> Україна, Львів, вул. Стефана
            Бандери
          </p>
        </div>
      </div>

      <div className="flex-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label style={labelStyle}>Введіть ім'я</label>
              <input
                type="text"
                placeholder="name@divass"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full"
                style={inputStyle}
                required
              />
            </div>
            <div className="flex-1">
              <label style={labelStyle}>Електронна пошта</label>
              <input
                type="email"
                placeholder="Введіть призвіще"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full"
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label style={labelStyle}>Номер телефону</label>
              <input
                type="tel"
                placeholder="+380 97 0000 000"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full"
                style={inputStyle}
              />
            </div>
            <div className="flex-1">
              <label style={labelStyle}>Виберіть тему</label>
              <select
                value={topic}
                onChange={e => setTopic(e.target.value)}
                className="w-full"
                style={selectStyle}
                required
              >
                <option value="" disabled>
                  Виберіть тему...
                </option>
                <option value="general">Загальний запит</option>
                <option value="project">Запустити проєкт</option>
                <option value="consultation">
                  Консультація, розмова особисто
                </option>
                <option value="partnership">Укласти взаємну торгівлю</option>
                <option value="other">Інше</option>
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Що лякає опис є?</label>
            <div style={radioGroupStyle}>
              <label style={radioLabelStyle}>
                <input
                  type="radio"
                  name="question"
                  value="general"
                  onChange={() => {}}
                  style={radioInputStyle}
                />
                Хочу бутти тачучкою
              </label>
              <label style={radioLabelStyle}>
                <input
                  type="radio"
                  name="question"
                  value="project"
                  onChange={() => {}}
                  style={radioInputStyle}
                />
                Хочу підготувати проєкт
              </label>
              <label style={radioLabelStyle}>
                <input
                  type="radio"
                  name="question"
                  value="consultation"
                  onChange={() => {}}
                  style={radioInputStyle}
                />
                Бонусне, розмова особисто
              </label>
              <label style={radioLabelStyle}>
                <input
                  type="radio"
                  name="question"
                  value="partnership"
                  onChange={() => {}}
                  style={radioInputStyle}
                />
                Укласти взаємну торгівлю
              </label>
              <label style={radioLabelStyle}>
                <input
                  type="radio"
                  name="question"
                  value="other"
                  onChange={() => {}}
                  style={radioInputStyle}
                />
                Інше
              </label>
            </div>
          </div>

          <div>
            <label style={labelStyle}>Введіть своє повідомлення...</label>
            <textarea
              placeholder="Введіть своє повідомлення..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full"
              style={textareaStyle}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agreement}
                onChange={e => setAgreement(e.target.checked)}
                className="h-4 w-4"
              />
              <label>Я приймаю умови</label>
            </div>
            <button type="submit" style={buttonStyle}>
              Відправити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
