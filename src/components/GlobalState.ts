import {reactive} from "vue";

export const switchTheme = reactive({
    state: false,
    changeTheme(){
        switchTheme.state = !switchTheme.state;
    }
})
