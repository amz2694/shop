<template>
  <div class="account-container">
      <div class="rightnav-container">
          <div class="rightnav-content">
            <img src="../assets/dashboard.png">
            <p>dashboard</p>
          </div>
          <div class="rightnav-content">
            <img src="../assets/orders.png">
            <p>orders</p>
          </div>
          <div class="rightnav-content">
            <img src="../assets/logout.png">
            <p>logout</p>
          </div>
      </div>
      <div class="dashboard-container">

      </div>
      <div class="orders-container">
          <table>
              <tr class="tableHeading">
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>total</th>
                  <th class="buttd"></th>
              </tr>
              <tr>
                  <td>#001</td>
                  <td>Janury, 28, 2022</td>
                  <td>proccessing</td>
                  <td>10000</td>
                  <td class="buttd"><button class="viewCartbuts">View</button></td>
              </tr>
              <tr>
                  <td>#001</td>
                  <td>Janury, 28, 2022</td>
                  <td>proccessing</td>
                  <td>10000</td>
                  <td class="buttd"><button class="viewCartbuts">View</button></td>
              </tr>
              <tr>
                  <td>#001</td>
                  <td>Janury, 28, 2022</td>
                  <td>proccessing</td>
                  <td>10000</td>
                  <td class="buttd"><button class="viewCartbuts">View</button></td>
              </tr>
              <tr>
                  <td>#001</td>
                  <td>Janury, 28, 2022</td>
                  <td>proccessing</td>
                  <td>10000</td>
                  <td class="buttd"><button class="viewCartbuts">View</button></td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style src="../style/maAccount.css">

</style>