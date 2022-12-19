export default (email,webadress)=>{

  const mail=email.split("@")[1];
  const domain=webadress.substring(4,webadress.length);

  return mail===domain ? true : false

}