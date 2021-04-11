import React from "react";

export default function Table() {
  return (
    <div>
      <h1>Responsive Table</h1>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks %</th>
            <th>Pass/Fail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-type="Sr. No.">1</td>
            <td data-type="Name">Krishna</td>
            <td data-type="Age">34</td>
            <td data-type="Marks %">70%</td>
            <td data-type="Pass/Fail">Pass</td>
          </tr>
          <tr>
            <td data-type="Sr. No.">1</td>
            <td data-type="Name">Karuna</td>
            <td data-type="Age">33</td>
            <td data-type="Marks %">75%</td>
            <td data-type="Pass/Fail">Pass</td>
          </tr>
          <tr>
            <td data-type="Sr. No.">1</td>
            <td data-type="Name">KK</td>
            <td data-type="Age">35</td>
            <td data-type="Marks %">30%</td>
            <td data-type="Pass/Fail">Fail</td>
          </tr>
          <tr>
            <td data-type="Sr. No.">1</td>
            <td data-type="Name">KKS</td>
            <td data-type="Age">30</td>
            <td data-type="Marks %">30%</td>
            <td data-type="Pass/Fail">Fail</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
