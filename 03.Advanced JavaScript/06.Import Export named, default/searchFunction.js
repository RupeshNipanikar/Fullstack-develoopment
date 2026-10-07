export default function getMatchingSkillsArr(arr, keyword) {
    return arr.filter(function(trip) {
        return trip.skills.some(function(skill) {
            return skill.toLowerCase().includes(keyword.toLowerCase())
        })
    })
}