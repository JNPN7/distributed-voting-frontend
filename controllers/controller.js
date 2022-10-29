const home = (req, res) => {
    res.render("pages/home", {title: "Home", cur: "home"});
}
const pre_analysis = (req, res) => {
    res.render("pages/pre_analysis", {title: "Pre-Analysis", cur: "pre_analysis"})
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
    pre_analysis,
    vote,
    voting_registration,
    live_results,
    candidate_registration
}