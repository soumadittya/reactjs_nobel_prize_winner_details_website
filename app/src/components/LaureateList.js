import React from 'react';

const LaureateList = (props) => {
  return (
    <div className="p-3 mb-2 bg-grey">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Surname</th>
            <th scope="col">Motivation</th>
          </tr>
        </thead>
        <tbody>
            {props.prizeDetail.laureates === undefined?null:
            props.prizeDetail.laureates.map((laureate, index) => (
          <tr>
            <th scope="row">{laureate.id}</th>
            <td>{laureate.firstname}</td>
            <td>{laureate.surname}</td>
            <td>{laureate.motivation}</td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaureateList;
