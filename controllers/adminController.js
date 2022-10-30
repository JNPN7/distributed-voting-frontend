const dashboard = (req, res) => {
    res.render("pages/admin/dashboard", {title: "Admin", isAdmin: true, cur: "dashboard"});
}
const create_position = (req, res) => {
    res.render("pages/admin/create_position", {title: "Admin", isAdmin: true, cur: "create_position"});
}
const create_election = (req, res) => {
    res.render("pages/admin/create_election", {title: "Admin", isAdmin: true, cur: "create_election"});
}
const candidates = (req, res) => {
    res.render("pages/admin/candidates", {title: "Admin", isAdmin: true, cur: "candidates"})
}
const election_details = (req, res) => {
    res.render("pages/admin/election_details", {title: "Admin", isAdmin: true, cur: "election_details"})
}
const position_details = (req, res) => {
    res.render("pages/admin/position_details", {title: "Admin", isAdmin: true, cur: "position_details"})
}
const voters = (req, res) => {
    res.render("pages/admin/voters", {title: "Admin", isAdmin: true, cur: "voters"})
}

module.exports = {
    dashboard,
    create_position,
    create_election,
    candidates,
    election_details,
    position_details,
    voters
}