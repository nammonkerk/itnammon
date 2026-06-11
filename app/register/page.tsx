  "use client";
export default function register() {
  return (
    <div className="auth-page">
      <form className="auth-page">
      
        <h2>สมัครสมาชิก</h2>
        <input
          placeholder="Name"
          type="email"
          />
          <input
          placeholder="Email"
          type="email"
          />
         <input
          placeholder="Password"
          type="password"
          />
          <button>Register</button>
      </form>
    </div>
  );
}