const Home = Vue.component('Home', {
  data: function () {
    return {
			giant: "HOME",
  		title: "VueRouter CDN Template with Less - Home",
			visibility: false,
			icon: ''
    }
  },
	created(){
		document.title = this.title

		var mobileType = getMobileOperatingSystem()
		if( mobileType == "Android" ){
			this.icon = 'logo-google-playstore'
		}else if( mobileType == "iOS" ){
			this.icon = 'logo-apple-appstore'
		}else{
			this.icon = 'storefront-outline'
		}
	},
  template: `
	<div class="component home">
		<h1><strong>{{ giant }}</strong></h1>

		<button class="add-button">
			<ion-icon class="button-icon" :name="icon"></ion-icon>
			Add app
		</button>
	
		<a href="https://github.com/PatoGordo/VueTemplateWithLessAndPwa" target="_blank"><img class="card" src="https://github-readme-stats.vercel.app/api/pin/?username=patogordo&repo=VueTemplateWithLessAndPwa&show_owner=false" alt="Source Code" /></a>
		<p>Card by <a href="https://github.com/anuraghazra">Anurag Hazra</a></p>
	</div>`
})