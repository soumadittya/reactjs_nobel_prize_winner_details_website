import React, { useState, useEffect } from "react";
import LaureateList from "./LaureateList";

const WinnerList = (props) => {
//   const [year, setYear] = useState("All Years");
  const [category, setCategory] = useState("all");
  const prizes = props.prizeDetails.prizes;
  const [filterPrizes, setFilterPrizes] = useState(prizes);


  const filter = (e) => {
      e.preventDefault();
      if (category == "chemistry"){
        var temp = prizes.filter(obj => obj.category === "chemistry" && parseInt(obj.year) < 2019);
        setFilterPrizes(temp);
      }else if(category == 'physics'){
        var temp = prizes.filter(obj => obj.category === "physics" && parseInt(obj.year) < 2019);
        setFilterPrizes(temp);
    }
      else if(category == 'economics'){
        var temp = prizes.filter(obj => obj.category === "economics" && parseInt(obj.year) < 2019);
        setFilterPrizes(temp);
    }else if(category == 'medicine'){
        var temp = prizes.filter(obj => obj.category === "medicine" && parseInt(obj.year) < 2019);
        setFilterPrizes(temp);
    }else if(category == 'literature'){
        var temp = prizes.filter(obj => obj.category === "literature" && parseInt(obj.year) < 2019);
        setFilterPrizes(temp);
    }else if(category == 'peace'){
        var temp = prizes.filter(obj => obj.category === "peace" && parseInt(obj.year) < 2019);
        setFilterPrizes(temp);
    }else if(category == 'all'){
        var temp = prizes.filter(obj => parseInt(obj.year) < 2019);
        setFilterPrizes(temp);
    }
  }

  return (
    <div className="WinnerList">
      <div className="p-3 mb-2 bg-light text-dark">
        <h2>List of Nobel Prize Winners</h2>
        <br></br>
       
        <div className = "filter">
                {/* <input type = "text" value = {year}/>
                <br></br>
                <br></br> */}

                <select 
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}
                >
                    <option value = "all">All Categories</option>
                    <option value = "chemistry">Chemistry</option>
                    <option value = "physics">Physics</option>
                    <option value = "economics">Economics</option>
                    <option value = "medicine">Medicine</option>
                    <option value = "peace">Peace</option>
                    <option value = "literature">Literature</option>
                </select>
        <button onClick = {filter}>Filter upto 2018</button>            

        </div>
        
        <br></br>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Category</th>
              <th scope="col">Laureates</th>
            </tr>
          </thead>

          <tbody>
            {filterPrizes.map((prizeDetail) => (
              // {if (prizeDetail.year === '1999')
              <tr>
                <th scope="row">{prizeDetail.year}</th>
                <td>{prizeDetail.category}</td>
                <td>
                  <LaureateList prizeDetail={prizeDetail} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinnerList;
