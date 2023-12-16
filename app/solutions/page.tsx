
import React from 'react';



const HomePage: React.FC = () => {
  const startupProps = {
    companyName: "Your Company Name", // Replace with the actual company name
    technology: ["React", "TypeScript"], // Replace with the actual technologies
  };
  return (

    <div>
      <header>
        <h1>Important tasks!</h1>
      </header>

      <main>
        <section>
          <h2>Week-1</h2>
          <p>Example</p>
        </section>

        <section>
          <h2>Monday</h2>
          <table>
            <thead>
              <tr>
                <th>Challenge</th>
                <th>Design</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reading</td>
                <td>Learning typescript and next</td>
              </tr>
              <tr>
                <td>Blabla</td>
                <td>Somthing</td>
              </tr>  
            </tbody>
          </table>
        </section>

        <section>
          <h2>Logic</h2>
          <div>
            <p>Example</p>
          </div>
          <div>
            <p>Maybe learning</p>
          </div>
        </section>
      </main>

      <footer>
        <p>End</p>
      </footer>

    </div>
  );
};

export default HomePage;
