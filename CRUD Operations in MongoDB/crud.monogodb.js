use("cruddb")

db.createCollection("courses")
db.courses.insertone({
    name: "web dev",
    price: 0,
    assignment:12,
})
