import React, {CSSProperties, useState} from 'react';

type Props = {
  width?: string;
}

export const LoginForm = (props: Props) => {
  const [formData, setFormData] = useState({username: '', password: ''});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted data:', formData);
    // Здесь можно обработать данные, например, отправить их на сервер
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <div style={fieldStyles}>
        <label htmlFor="username" style={labelStyles}>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          style={inputStyles}
          required
        />
      </div>
      <div style={fieldStyles}>
        <label htmlFor="password" style={labelStyles}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          style={inputStyles}
          required
        />
      </div>
      <button type="submit" style={buttonStyles}>Login</button>
    </form>
  );
};


// Пример простого стиля
const formStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '300px',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '5px',
  backgroundColor: '#000000',
};

const fieldStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
};

const labelStyles: React.CSSProperties = {
  fontWeight: 'bold',
};

const inputStyles: React.CSSProperties = {
  padding: '8px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyles: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default LoginForm;