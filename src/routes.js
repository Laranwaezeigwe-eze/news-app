import Side from "./components/Side.vue";
import Body from "./components/Body.vue";

const routes=[
    {
        path: '/',
        name: 'body',
        component: Body
    },
    {
        path: '/side',
        name: 'side',
         component: Side
    }
]
export default routes