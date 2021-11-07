import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=0&size=10&sort=date,desc`).then((res) => {
      setPage(res.data);
    });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map((venda) => (
            <tr key={venda.id}>
              <td>{formatLocalDate(venda.date, "dd/MM/yyy")}</td>
              <td>{venda.seller.name}</td>
              <td>{venda.visited}</td>
              <td>{venda.deals}</td>
              <td>{venda.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
