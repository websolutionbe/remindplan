<template>
    <div class="contact-field">
        <div class="profile">
            <img :src="imagePath(profilePicturePath)" alt="profile picture" />
        </div>
        <div class="info">
            <h2>{{ person.first_name + " " + person.last_name }}</h2>
            <div class="contact-info">
                <span><svg-mail />{{ person.email}}</span>
                <span v-if="person.phone"><svg-phone />{{ person.phone }}</span>
                <span v-if="submission"><svg-added-user />{{ submission }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import {SvgMail, SvgPhone, SvgAddedUser} from "@/svg";

export default {
    name: "ContactField",
    components: {
        SvgMail,
        SvgPhone,
        SvgAddedUser
    },
    props: {
        person : { type: Object, required : true },
        edit : { type: Boolean, required : false, default: false },
        submission : { type: String, required : false, default: false },
    },
    beforeMount() {
      console.log(this.person);
    },
    computed: {
        profilePicturePath(){
            return "users/" + this.person.id + "/profile.jpg"
        }
    }
}
</script>
