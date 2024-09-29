Vue.component('info-form',{
    template: `
    <div id="RecordSession"> 
        <span class="fs-4">Record Your Volunteer Session</span><br/>
        <div class="card mb-2" >
            <div class="card-header">
                Please enter the required information below.
            </div>
            <div class="card-body">
                <div class="row" >
                    <div class="col-sm-3"> &nbsp </div>
                    <div class="col-sm-6">
                        <form class="info-form" @submit.prevent="onSubmit">
                            <p class="text-danger" v-if="errors.length">
                            <b>Please correct the following error(s):</b>
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                            </p>
                            <p>
                                <label for="name" class="w-100">Name:</label>
                                <input id="name" v-model="name"  class="w-100" placeholder="Enter your name">
                            </p>
                            <p>
                                <label for="faction" class="w-100">Faction:</label>
                                <input id="faction" v-model="faction" class="w-100" placeholder="Enter your faction">
                            </p>
                            <p>
                                <label for="locationActivity" class="w-100">Location & Activity:</label>
                                <select id="locationActivity" v-model.text="locationActivity" class="w-100">
                                    <option>- Select -</option>
                                    <option>FSMS SciBowl</option>
                                    <option>FSMS SciOly</option>
                                    <option>FCMS SciBowl</option>
                                    <option>FCMS SciOly</option>
                                </select>
                            </p>
                            <p>
                                <label for="date" class="w-100">Date Performed:</label>
                                <input id="date" type="date" v-model="date" class="w-100" placeholder="date">
                            </p>
                            <p>
                                <label for="description" class="w-100">Description of Service Performed:</label>      
                                <textarea id="description" v-model="description" class="w-100"></textarea>
                            </p>
                            <p>
                                <label for="nextVol" class="w-100">Suggestions for Next Volunteer:</label>      
                                <textarea id="nextVol" v-model="nextVol" class="w-100"></textarea>
                            </p>
                            <p>
                                <div class="d-flex justify-content-center">
                                    <input class="btn btn-primary w-25" type="submit"  value="Submit"> 
                                </div>
                            </p>    
                        </form>
                    </div>
                    <div class="col-sm-3"> &nbsp </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            name: null,
            faction: null,
            locationActivity: null,
            date: null,
            description: null,
            nextVol: null,
            errors: []
      }
    },
    methods: {
        onSubmit() {
            this.errors = []
            if(this.name && this.faction && this.locationActivity && this.date && this.description && this.nextVol) {
                let infoForm = {
                    name: this.name,
                    faction: this.faction,
                    locationActivity: this.locationActivity,
                    date: this.date,
                    description: this.description,
                    nextVol: this.nextVol
                }
                this.$emit('form-submitted', infoForm)
                this.name= null
                this.faction= null
                this.locationActivity= null
                this.date= null
                this.description= null
                this.nextVol= null 
            }
            else {
                if(!this.name) this.errors.push("Name required.")
                if(!this.faction) this.errors.push("Faction required.")
                if(!this.locationActivity) this.errors.push("Location & Activity required.")
                if(!this.date) this.errors.push("Date required.")
                if(!this.description) this.errors.push("Description required.")
                if(!this.nextVol) this.errors.push("Suggestions required.")
            }
        }
    }
    
})

var app= new Vue({
    el: '#app',
    data: {
        //product: "Boots"
        forms: [
            {   name: "Amy",
                faction: "Krypton",
                locationActivity: "FSMS SciOly",
                date: "2021-05-15",
                description: "Helped with advanced skeletal system prep for Anatomy event",
                nextVol: "Cover basics of the muscular system"                               
            },
            {   name: "Sanjay",
                faction: "Krypton",
                locationActivity: "FSMS SciBowl",
                date: "2021-05-01",
                description: "Helped with learning basic chemical properties of elements",
                nextVol: "Work on learning the basic charges and locations of sub-atomic particles"
            },
            {   name: "Maumita",
                faction: "Neon",
                locationActivity: "FCMS SciOly",
                date: "2021-04-27",
                description: "Helped with skeletal system prep for Anatomy event",
                nextVol: "Cover basics of the muscular system"
            },
            {   name: "Emily",
                faction: "Xenon",
                locationActivity: "FCMS SciBowl",
                date: "2021-04-08",
                description: "Helped with learning basic chemical properties of elements",
                nextVol: "Work on learning the basic charges and locations of sub-atomic particles"
            },
            {   name: "Abel",
                faction: "Argon",
                locationActivity: "FSMS SciOly",
                date: "2021-03-23",
                description: "Helped with skeletal system prep for Anatomy event",
                nextVol: "Cover basics of the muscular system"
            },
            {   name: "Evan",
                faction: "Helium",
                locationActivity: "FSMS SciBowl",
                date: "2021-03-12",
                description: "Helped with learning basic chemical properties of elements",
                nextVol: "Work on learning the basic charges and locations of sub-atomic particles"
            }
        ],
        AppMode: "list"
    },
    methods: {
        addForm(infoForm) {
            this.forms.push(infoForm)
            this.AppMode='list'
        },
        cancelForm(){
            this.AppMode='list'
        }
    }
})   //you've seen my darkest fears, like you've known me for a thousand years
//the boy that's really undeneath, all the scars and insecurities
//baby, i think that you've been sent to save me

//you're the only one that my heart keeps coming back to
//it's always been you, it's always been you

//AHHHHHHHHH AHHHHHHHHH AHHHHHHHHHHHHHHHHH AHHHHHHHHHHHHHHHHHHHHHHHHHHH
//IT's ALWAYS BEEN YOUUUUUU
