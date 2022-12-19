

export default class ResultMessages{

  errorMessage=(status,text,data)=>{
    return {
      status,
      message:text,
      data
    }
  } 

  successMessage=(status,text,data)=>{
    return {
      status,
      message:text,
      data
    }
  }

}