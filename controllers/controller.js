const home = (req, res) => {
    res.render("pages/home", {title: "Home", cur: "home"});
}
const election_details = (req, res) => {
    res.render("pages/election_details", {title: "Pre-Analysis", cur: "election_details"})
}
const position_details = (req, res) => {
    res.render("pages/position_details", {title: "Admin", cur: "position_details"})
}
const candidates = (req, res) => {
    res.render("pages/candidates", {title: "Admin",  cur: "candidates"})
}
const vote = (req, res) => {
    res.render("pages/vote", {title: "Vote", cur: "vote"})
}
const voting_registration = (req, res) => {
    res.render("pages/voting_registration", {title: "Voting-Registration", cur: "voting_registration"})
}
const live_results = (req, res) => {
    res.render("pages/live_results", {title: "Live-Results", cur: "live_results"})
}
const candidate_registration = (req, res) => {
    res.render("pages/candidate_registration", {title: "Candidate-Registration", cur: "candidate_registration"})
}

module.exports= {
    home,
    election_details,
    position_details,
    candidates,
    vote,
    voting_registration,
    live_results,
    candidate_registration
}