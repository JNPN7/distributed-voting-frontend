const dashboard = (req, res) => {
    res.render("pages/admin/dashboard", {title: "Admin", isAdmin: true, cur: "dashboard"});
}
const create_position = (req, res) => {
    res.render("pages/admin/create_position", {title: "Admin", isAdmin: true, cur: "create_position"});
}
const create_election = (req, res) => {
    res.render("pages/admin/create_election", {title: "Admin", isAdmin: true, cur: "create_election"});
}


module.exports = {
    dashboard,
    create_position,
    create_election
}