<template>
  <div class="contact">
      <div class="main-view">
    <div class="info">
      <p class="info-header">Contact Us</p>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Your email address</label>
          <input id="emailAddress" type="email" class="form-control" placeholder="name@example.com">
          <span id="txtHint"></span>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea id="message-body" class="form-control" rows="3"></textarea>
        </div>
      </form>
        <div class="button-wrapper">
          <a class="large-button" v-on:onclick="sendEmail">Submit</a>
        </div>
        <span id="email-success">{{msg}}</span>       
    </div>
  </div>  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ContactView',
  data() {
      return {
          msg: '',
      }
  },
  methods: {
    sendEmail() {
    this.msg = "Email submitted!";
    console.log("Stuff");   
    }
  }
}
</script>

<style scoped>

  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  #email-success {
      color: green;
  }
</style>
