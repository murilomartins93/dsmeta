import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  useEffect(() => {
    axios.get("http://localhost:8080/sales")
        .then(response => {
          console.log(response.data);
        })
  }, [])

  return (
    <div className="dsmeta-sales-card">
      <h2>Vendas</h2>
      <div className="date-selector">
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div className="dsmeta-sales-table">
        <table>
          <thead>
            <tr>
              <th className="show-992">ID</th>
              <th className="show-576">Data</th>
              <th>Vendedor</th>
              <th className="show-992">Visitas</th>
              <th className="show-992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="show-992">1</td>
              <td className="show-576">20/03/2022</td>
              <td>José Alface</td>
              <td className="show-992">12</td>
              <td className="show-992">23</td>
              <td>200.30</td>
              <td>
                <div className="notification-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr className="table-row">
              <td className="show-992">1</td>
              <td className="show-576">20/03/2022</td>
              <td>José Alface</td>
              <td className="show-992">12</td>
              <td className="show-992">23</td>
              <td>200.30</td>
              <td>
                <div className="notification-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr className="table-row">
              <td className="show-992">1</td>
              <td className="show-576">20/03/2022</td>
              <td>José Alface</td>
              <td className="show-992">12</td>
              <td className="show-992">23</td>
              <td>200.30</td>
              <td>
                <div className="notification-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
