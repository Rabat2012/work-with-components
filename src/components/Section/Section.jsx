import React from "react";
import "./Section.css";

const Section = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div className="section-table">
        <table className="table">
          <tr>
            <td>Имя:</td>
            <td>Фамилия:</td>
            <td>Возраст:</td>
            <td>ID:</td>
          </tr>
          {user.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Section;
