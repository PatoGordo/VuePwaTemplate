Vue.component('app-navbar', {
  data: function () {
    return {

    }		
  },
	methods:{
		
	},
  template: `
	<p class="navbar">
		<router-link to="/" class="navbar-item title">Vue Pwa 🚀</router-link>
		<router-link to="/" class="navbar-item">Home</router-link>
	</p>
	`
})