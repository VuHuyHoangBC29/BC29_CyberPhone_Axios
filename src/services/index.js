function Services() {
  this.getListProductApi = function () {
    /**
     * Promise (lời hứa)
     * - Pending (Thời gian chờ)
     * - Resolve (Thành công)
     * - Reject (Không thành công)
     */
    return axios({
      url: "https://628b995f667aea3a3e32d1a4.mockapi.io/api/products",
      method: "GET",
    });

    // return promise
  };
}
