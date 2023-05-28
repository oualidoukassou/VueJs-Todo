export default {

    template: `
    
    <li class ="py-4 bg-gray-500 my-2">
    <div class="flex justify-between px-4">
        <h1 class="text-lg font-semibold">{{ assignment.name }}</h1>
        <input type="checkbox" v-model="assignment.complete">
    </div>

   </li>
    
    ` ,

    props: {
        assignment: Object,


    }


}