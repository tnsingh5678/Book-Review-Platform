import React from 'react';

const AuthForm = ({
  isLogin,
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
  userName,
  setUserName,
  error
}) => (
  <form onSubmit={onSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
    <h2 className="text-xl font-semibold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
    
    {error && <p className="text-red-500 mb-2">{error}</p>}

    {!isLogin && (
      <div className="mb-4">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
    )}

    <div className="mb-4">
      <label className="block mb-1">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
    </div>

    <div className="mb-4">
      <label className="block mb-1">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
    </div>

    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
      {isLogin ? 'Login' : 'Sign Up'}
    </button>
  </form>
);

export default AuthForm;
