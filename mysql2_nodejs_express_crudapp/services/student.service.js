const db = require('../db')

module.exports.getAllstudents = async ()=>{
    const [records] = await db.query("SELECT* FROM students")
        //.catch(err=> console.log(err)) //will be handeled in global error controller
    return records;
}

module.exports.getStudentById = async (id)=>{
    const [record] = await db.query("SELECT* FROM students WHERE id = ?",[id])
    //.catch(err=> console.log(err)) //--> don't use .catch(err=>{}) for await --> use try{} catch(e){}
    return record;
}

module.exports.deleteStudentById = async (id)=>{
    const [record] = await db.query("DELETE  FROM students WHERE id = ?",[id])
        //.catch(err=> console.log(err)) 
    return record.affectedRows;
}

module.exports.addOrEditStudent = async (obj, id=0)=>{
    
    if(id==0){
        const currentDate = new Date();
        await db.query("INSERT INTO students (name, university, district ,updatedAt ,createdAt) VALUES(?, ?, ?, ?, ?)",[ obj.name, obj.university, obj.district ,currentDate ,currentDate])
        //.catch(err=> console.log(err)) 
    }
    else{
        const [{affectedRows}] = await db.query("UPDATE students SET name=? ,university=? ,district=? ,updatedAt=?  WHERE id=?",[obj.name, obj.university, obj.district,new Date(), id])
        //.catch(err=> console.log(err)) 
        return affectedRows;
    }
}
/*
update query returns:
[
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1  Changed: 1  Warnings: 0",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 1
  },
  null
]
*/