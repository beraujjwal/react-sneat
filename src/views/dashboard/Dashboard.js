const Dashboard = () => {
    return (
      <>
        <div className="row">
          <div className="col-lg-8 mb-4 order-0">
            <div className="card">
              <div className="d-flex align-items-end row">
                <div className="col-sm-7">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                    <p className="mb-4">
                      You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                      your profile.
                    </p>

                    <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
                  </div>
                </div>
                <div className="col-sm-5 text-center text-sm-left">
                  <div className="card-body pb-0 px-0 px-md-4">
                    <img
                      src={"../assets/img/illustrations/man-with-laptop-light.png"}
                      height="140"
                      alt="View Badge User"
                      data-app-dark-img="illustrations/man-with-laptop-dark.png"
                      data-app-light-img="illustrations/man-with-laptop-light.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 order-1">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title d-flex align-items-start justify-content-between">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={"../assets/img/icons/unicons/chart-success.png"}
                          alt="chart success"
                          className="rounded"
                        />
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="cardOpt3"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                          <a className="dropdown-item" href="#">View More</a>
                          <a className="dropdown-item" href="#">Delete</a>
                        </div>
                      </div>
                    </div>
                    <span className="fw-semibold d-block mb-1">Profit</span>
                    <h3 className="card-title mb-2">$12,628</h3>
                    <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title d-flex align-items-start justify-content-between">
                      <div className="avatar flex-shrink-0">
                        <img
                          src={"../assets/img/icons/unicons/wallet-info.png"}
                          alt="Credit Card"
                          className="rounded"
                        />
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="cardOpt6"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                          <a className="dropdown-item" href="#">View More</a>
                          <a className="dropdown-item" href="#">Delete</a>
                        </div>
                      </div>
                    </div>
                    <span>Sales</span>
                    <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                    <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.42%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
  
export default Dashboard;