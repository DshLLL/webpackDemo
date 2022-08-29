export default function printMe() {
    console.log(process.env.NODE_ENV)
    console.log('I get called from print.js!');
}