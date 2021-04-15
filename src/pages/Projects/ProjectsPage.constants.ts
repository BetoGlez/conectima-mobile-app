import { IProject } from "../../models/project.model";

// TODO: Remove this mock data once it is fetched from GQL
export const mockProjects: Array<IProject> = [
    {
        id: "606525597e93fe70a6877e0c",
        name: "Ipatia",
        startDate: "26/03/2020",
        activeSprint: {
            id: "606666bdb9f43182b15c42e0",
            version: "v1.0.0",
            dedications: [
                {
                    user: "rbarriuso@tribalyte.com",
                    currentHours: 5.5,
                    expectedHoursPerDay: 1.5
                },
                {
                    user: "mrebordinos@tribalyte.com",
                    currentHours: 46,
                    expectedHoursPerDay: 6
                },
                {
                    user: "dlopez@tribalyte.com",
                    currentHours: 0,
                    expectedHoursPerDay: 0
                },
                {
                    user: "agonzalez@tribalyte.com",
                    currentHours: 15,
                    expectedHoursPerDay: 5
                },
                {
                    user: "jcftjo@tribalyte.com",
                    currentHours: 2,
                    expectedHoursPerDay: 1
                }
            ],
        },
    },
];
