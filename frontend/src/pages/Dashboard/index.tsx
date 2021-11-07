const Dashboard = () => {
    return (
        <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3">Dashboard de vendas</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Total de vendas (%)</h5>
              <DonutChart />
            </div>
          </div>
          <h2 className="text-primary py-3">Todas as vendas</h2>
          <DataTable />
        </div>
        <Footer />
      </>
    )
}

export default Dashboard
