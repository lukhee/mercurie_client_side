
const productData = [
    {
        id: 1,
        name: 'Food App',
        description: 'Free food for first 20 customers',
        teamLead: 'Max J.',
        status: 'Pending',
        staffs : [ 
            {
                id: 1,
                name: "Awolabi Bamidele",
                teamLead: true
            },{
                id: 2, 
                name: "Babalola Ajayi",
                teamLead: false
            },{
                id: 3, 
                name: "Tajudeen Arole",
                teamLead: false
            },{
                id: 4, 
                name: "Timi Amosu",
                teamLead: false
            }
         ]
    },{
        id: 2,
        name: 'Dev App',
        description: 'recruiting Dev for Fintech',
        teamLead: 'Jacob Web.',
        status: 'Done',
        staffs : [ 
            {
                id: 1,
                name: "Bamilola Temitope",
                teamLead: true
            },{
                id: 2, 
                name: "Simisola Gold",
                teamLead: false
            },{
                id: 3, 
                name: "Banji Arole",
                teamLead: false
            },{
                id: 4, 
                name: "Semiu White",
                teamLead: false
            }
         ]
    },{
        id: 3,
        name: 'Fintech app',
        description: 'Acc analysis from your phone',
        teamLead: 'J. J.',
        status: 'Pending',
        staffs : [ 
            {
                id: 1,
                name: "Balogun Eluku",
                teamLead: true
            },{
                id: 2, 
                name: "Adekunle Gold",
                teamLead: false
            },{
                id: 3, 
                name: "Omobanji Banji",
                teamLead: false
            },{
                id: 4, 
                name: "Clemet Clerk",
                teamLead: false
            }
         ]
    },{
        id: 4,
        name: 'Store App',
        description: 'Free food for first 20 customers',
        teamLead: 'Joy. Col.',
        status: 'Done',
        staffs : [ 
            {
                id: 1,
                name: "Scot Blim",
                teamLead: true
            },{
                id: 2, 
                name: "Smart Klein",
                teamLead: false
            },{
                id: 3, 
                name: "DIode Triode",
                teamLead: false
            },{
                id: 4, 
                name: "Smith James",
                teamLead: false
            }
         ]
    },{
        id: 5,
        name: 'Storage App',
        description: 'storage facility app',
        teamLead: 'Thom J.',
        status: 'Done',
        staffs : [ 
            {
                id: 1,
                name: "Smart Blim",
                teamLead: true
            },{
                id: 2, 
                name: "Clerk Blonc",
                teamLead: false
            },{
                id: 3, 
                name: "Perk Wolf",
                teamLead: false
            },{
                id: 4, 
                name: "Scout Rigard",
                teamLead: false
            }
         ]
    },{
        id: 6,
        name: 'Job App',
        description: 'search available job app',
        teamLead: 'Clerk M. J.',
        status: 'Pending',
        staffs : [ 
            {
                id: 1,
                name: "Banji Agba",
                teamLead: true
            },{
                id: 2, 
                name: "Kunle Blonc",
                teamLead: false
            },{
                id: 3, 
                name: "James Smith",
                teamLead: false
            },{
                id: 4, 
                name: "John Terry",
                teamLead: false
            }
         ]
    }
]

const staffs = [
    {
        id: 1,
        name: "Balogun Olabanji",
        skill: "software",
        rating: 5
    },{
        id: 2,
        name: "Olabanji Shegun",
        skill: "data analysis",
        rating: 7
    },{
        id: 3,
        name: "Sunbo Gbemiga",
        skill: "marketer",
        rating: 4
    },{
        id: 4,
        name: "Taoma Akinyemi",
        skill: "product manager",
        rating: 8
    }
]

export default productData
export {
    staffs,
}