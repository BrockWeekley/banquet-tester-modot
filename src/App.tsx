import React from 'react';
import './banquet.css';
import './App.css';

function App() {
  return (
    <div className="bcolor3 background">
      <div className="header">
        <div className="header-left"><div className="img1 logo" /><div className="color1">Login Page</div></div>
        <div className="header-right">
            <div className="color1 text">
                <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 512 512">
                    <title>Finger Print</title>
                    <path
                        d="M56.79 200.58l12.36 7.5 7.35-13.58C93.07 166.75 143.78 102 256 102c115 0 164 70.32 180.1 93.46l8.16 12.7L469.88 192l-8.54-13.36c-8.88-12.85-27.52-39.53-60.78-63.1C360.15 86.82 311.5 72.25 256 72.25c-128.07 0-186.69 75.11-206 107.25L42.63 192 54 198.86a14.09 14.09 0 001.63 1.1 12.57 12.57 0 001.16.62z"></path>
                    <path
                        d="M379.22 172.32c-35.54-28.93-78.12-44.25-123.22-44.25-97.52 0-162.31 66-183.33 131.47C53.42 320 76.82 407.61 77.8 411.36l4.38 13.81 29.93-6.43-4.74-15c-.21-.75-22.1-82.93-5.41-135.21 9-28.08 27.73-55.4 51.35-74.79C181.81 170.39 217.35 158 256 158c90.58 0 141.93 70.61 156.45 108.11 11.27 28.93 8.67 61.82-6.28 82-5.53 7.39-15.28 16.07-30.12 15.32-33.81-1.72-39.66-18.43-47.79-50.25-3.9-15.32-7.9-31.18-17.87-44-12.14-15.75-29.8-23.36-54.28-23.36-26.33 0-46.27 8.68-59.38 25.72-28.6 37.28-10 100.93-9.21 103.61l.22.85c1.41 3.86 36.08 96.65 128.93 119.68l14.77 3.21 8.09-28.71-15.27-3.43c-74.22-18.43-105.21-94.39-107.59-100.39a152.44 152.44 0 01-5.1-29.79c-1.08-14.46-.32-34.39 9.43-47.14 7.15-9.32 18.64-13.82 35-13.82 29.79 0 34.78 14.57 42.58 44.79 7.58 29.46 18 69.85 75.84 72.75 22.21 1.07 42.26-8.79 56.34-27.65 21.13-28.28 25.14-71.57 10.19-110.14-11.68-30.36-34.21-60.54-61.73-83.04z"></path>
                    <path
                        d="M154.18 343.21c-3.47-28.28 1.41-71 26.55-98.78 17.44-19.29 42.79-29 75.19-29 37.49 0 65.87 16.72 84.51 49.61a154 154 0 0117.88 53.25l1.43 14.69 30-2.2a112.63 112.63 0 00-1-15.6c-.11-1.28-3.57-32.46-21-63.75-24.06-43.11-62.63-65.93-111.74-65.93-41.5 0-74.55 13.18-98.06 39.11-31.85 35.14-38.35 86.25-33.91 122.35v.33c7.97 54.53 28.97 98.14 66.12 137.14l11.6 11.22 20.95-21.79-10.34-9.79c-32.72-34.28-51.25-72.64-58.18-120.86zM132.47 72.66c11.08-6.72 50.27-26.77 123.53-26.77 87.54 0 126.44 28.72 126.87 28.93l13.9 8.86L413 58.47l-13.22-8.56c-.52-.38-1.06-.76-1.6-1.12C385.5 40.54 340.54 16 256 16c-87.71 0-132.75 26.48-143.41 33.71L99 58.52l16.2 25.21z"></path>
                    <path
                        d="M390.59 415.21c-33.37 3.75-60.45-2.67-80.71-18.85-34.24-27.43-38.68-75.11-38.79-76l-1.23-14.88-30.53 2.23 1.31 15c.22 2.46 5.2 60.75 49.62 96.54 22.11 17.89 49.74 26.89 82.24 26.89a187 187 0 0021.56-1.29l16.59-2.09-6.1-29.71z"></path>
                </svg>
                Login</div>
            <div className="color1 text">
                <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 512 512">
                    <title>Person Add</title>
                    <path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z"></path>
                    <circle cx="288" cy="144" r="112"></circle>
                    <path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z"></path>
                </svg>
                Register</div>
        </div>
      </div>
      <div className="login">
          <div className="login-header bcolor2">
              <div className="color1 text top">Log in</div>
              <div className="bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 512 512">
                      <title>Logo Facebook</title>
                      <path
                          d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                          fill-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 512 512">
                      <title>Logo Twitter</title>
                      <path
                          d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 512 512">
                      <title>Logo Google</title>
                      <path
                          d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z"></path>
                  </svg>
              </div>
          </div>
          <div className="login-body bcolor1">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="form">Email
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg2" viewBox="0 0 512 512">
                      <title>Mail</title>
                      <path
                          d="M464 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V96a16 16 0 00-16-16zM265.82 284.63a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26z"></path>
                  </svg>
              </div>
              <div className="form">Password
                  <svg xmlns="http://www.w3.org/2000/svg" className="svg2" viewBox="0 0 512 512">
                      <title>Lock Closed</title>
                      <path
                          d="M420 192h-68v-80a96 96 0 10-192 0v80H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V204a12 12 0 00-12-12zm-106 0H198v-80.75a58 58 0 11116 0z"></path>
                  </svg>
              </div>
              <br />
              <br />
              <div className="color2">Forgot your password?</div>
              <div className="color2">Create an account</div>
              <br />
              <br />
              <div className="button bcolor2 color1">LET'S GO</div>
          </div>
      </div>
    </div>
  );
}

export default App;
