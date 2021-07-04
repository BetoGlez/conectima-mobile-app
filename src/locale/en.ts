export const en = {
    translation: {
        general: {
            appName: "Conectima",
            start: "Start",
            on: "On",
            off: "Off",
            noData: "No data available",
            select: "Select",
            confirm: "Confirm",
            cancel: "Cancel",
            compare: "Compare"
        },
        errors: {
            userNotFound: "There is no user registered with this credentials",
            invalidCredentials: "The credentials you are using are incorrect",
            duplicatedProjectName: "This project name has been already chosen, try another",
            errorConnectingSheet: "Error connecting Google Sheet, verify your sheet id and follow the instructions"
        },
        pages: {
            projects: "Projects",
            compare: "Compare",
            analytics: "Analytics",
            configure: "Configure"
        },
        auth: {
            introduceCredentials: "Introduce your credentials",
            email: "Email",
            password: "Password",
            login: "Login",
            logout: "Logout"
        },
        roles: {
            iAm: "I am a",
            manager: "Project manager",
            developer: "Software developer"
        },
        projects: {
            projects: "Projects",
            select: "Select a project",
            dedication: "Dedication",
            startedOn: "Started on {{startDate}}",
            ongoingFor: "Ongoing for {{dayNumber}} days",
            newProject: "New Project",
            projectName: "Project Name",
            whatProjectName: "What is the name of your project?",
            linkSpreadsheet: "Link spreadsheet",
            connectTrackingLegend: "Connect a google tracking sheet to sync project data",
            trackingPrepared: "Tracking sheet prepared to start",
            createProject: "Create project",
            copyShareEmail: "Copy project share email",
            emailCopiedToClipboard: "Project email copied to clipboard!",
            addSheetId: "Copy your Google Sheet id here",
            creatingProjectAndSyncing: "Creating project and syncing google sheets data..."
        },
        sprints: {
            sprints: "Sprints",
            select: "Select a sprint",
            selectSprint: "Select a sprint",
            changeSprint: "Change sprint",
            sprintVersion: "Sprint {{sprintVersion}}",
            issues: "{{issueNumber}} issues",
            sp: "{{sp}} sp",
            duration: "{{days}} days - {{hoursPerDay}}h / day",
            sprintDay: "Sprint day {{sprintDay}}",
            dayInSprint: "Day in the sprint",
            originalSp: "Current",
            goalSp: "Expected",
            addToCompare: "Add sprints to compare",
            noSprints: "No sprints"
        },
        dedication: {
            percentage: "{{percentage}}%",
            hoursPerDay: "{{hours}}h / day",
            noDedications: "No user dedication data"
        },
        costs: {
            euroAmount: "{{euroAmount}} €",
            realCost: "Real cost",
            expectedCost: "Expected cost",
            developerSprintCost: "Costs per developer in sprint",
            hourCost: "{{hourCost}} € / h",
            noCostRate: "No cost rate specified",
            noCostPleaseConfigure: "No cost rate specified, please configure one"
        },
        analytics: {
            projectAnalytics: "Project analytics",
            seeAnalytics: "See analytics",
            originalDeviation: "Original deviation",
            devDeviation: "Dev team deviation",
            originalProgress: "Original progress",
            devProgress: "Dev team progress",
            sprintsToCompare: "{{projectName}}: {{sprintsCount}} sprints to compare"
        },
        charts: {
            noChartSelected: "No chart has been selected, please select one form the list below",
            seeCharts: "Visualize sprint charts",
            chartsPageDetail: "In this page you will be able to visualize valuable data for the selected sprint within " +
            "your project! Choose between the available charts above, drag and search for the chart you want to visualize " +
            "and then just simply select it.",
            burndown: {
                type: "Burndown",
                description: "The outstanding work is often on the vertical axis, with time along the horizontal. " +
                "Burn down charts are a run chart of outstanding work. It is useful for predicting when all of the work " +
                "will be completed.",
                cardTitle: "Burndown chart",
                cardDescription: "A graphical representation of the work left to do versus time"
            },
            deviation: {
                type: "Deviation and progress",
                description: "The deviation is represented by negative and positive numbers, a negative value indicates " +
                "the sprint took less effort than expected (pessimistic estimation). A positive value represents the sprint " +
                "required more effort than expected (optimistic estimation).",
                cardTitle: "Deviation and progress",
                cardDescription: "Displays data about sprint deviation and progress"
            },
            costs: {
                type: "Simulated costs",
                description: "The cost each developer represents in the selected sprint, the cost is calculated based on " +
                "the developer cost rate (available in settings page), and the current or completed hours within the " +
                "sprint.",
                cardTitle: "Simulated sprint costs",
                cardDescription: "The simulated cost based on team members calculation"
            }
        },
        compare: {
            generalData: "General data",
            velocityChart: "Velocity chart",
            general: "General",
            velocity: "Velocity",
            showingXSprints: "Showing {{sprintsCount}} sprints",
            orgEstimation: "Original estimation",
            devEstimation: "Development estimation",
            consumedTime: "Consumed time",
            completeness: "Completeness",
            simulatedCost: "Simulated cost",
            hours: "{{hours}} h",
            percentage: "{{percentage}} %",
        },
        configure: {
            settings: "Settings",
            general: "General",
            devCostRate: "Developer cost rate",
            syncSpreadsheets: "Sync spreadsheets",
            manualSync: "Manual sync",
            sync: "Sync",
            appInfo: "App information",
            version: "Version",
            more: "More"
        }
    }
};