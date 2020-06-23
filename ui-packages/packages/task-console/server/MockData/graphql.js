module.exports = data = {
  UserTaskInstances:
    [
      {
        id: "45a73767-5da3-49bf-9c40-d533c3e77ef3",
        description: null,
        name: "Apply for visa",
        priority: "1",
        processInstanceId: "9ae7ce3b-d49c-4f35-b843-8ac3d22fa427",
        processId: "travels",
        rootProcessInstanceId: null,
        rootProcessId: null,
        state: "Ready",
        actualOwner: null,
        adminGroups: [],
        adminUsers: [],
        completed: null,
        started: "2020-02-19T11:11:56.282Z",
        excludedUsers: [],
        potentialGroups: [],
        potentialUsers: [],
        inputs: '{"Skippable":"true","trip":{"city":"Boston","country":"US","begin":"2020-02-19T23:00:00.000+01:00","end":"2020-02-26T23:00:00.000+01:00","visaRequired":true},"TaskName":"VisaApplication","NodeName":"Apply for visa","traveller":{"firstName":"Rachel","lastName":"White","email":"rwhite@gorle.com","nationality":"Polish","address":{"street":"Cabalone","city":"Zerf","zipCode":"765756","country":"Poland"}},"Priority":"1"}',
        outputs: '{}',
        referenceName: "VisaApplication",
        lastUpdate: "2020-02-19T11:11:56.282Z"
      },
      {
        id: "047ec38d-5d57-4330-8c8d-9bd67b53a529",
        description: "",
        name: "Confirm travel",
        priority: "1",
        processInstanceId: "9ae407dd-cdfa-4722-8a49-0a6d2e14550d",
        processId: "travels",
        rootProcessInstanceId: null,
        rootProcessId: null,
        state: "Ready",
        actualOwner: null,
        adminGroups: [],
        adminUsers: [],
        completed: null,
        started: "2020-02-19T10:59:34.185Z",
        excludedUsers: [],
        potentialGroups: [],
        potentialUsers: [],
        inputs: '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null}}',
        outputs: '{}',
        referenceName: "ConfirmTravel",
        lastUpdate: "2020-02-19T13:22:40.909Z"
      },
      {
        id: "f6be5b6b-34de-4b06-b6e7-05bcf8ba7f54",
        description: "",
        name: "Confirm travel",
        priority: "1",
        processInstanceId: "4bfdd404-c46a-4751-b401-b1428a30fa07",
        processId: "travels",
        rootProcessInstanceId: null,
        rootProcessId: null,
        state: "Completed",
        actualOwner: null,
        adminGroups: [],
        adminUsers: [],
        completed: "2020-02-19T10:49:24.623Z",
        started: "2020-02-19T10:49:16.559Z",
        excludedUsers: [],
        potentialGroups: [],
        potentialUsers: [],
        inputs: '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null}}',
        outputs: '',
        referenceName: "ConfirmTravel"
      },
      {
        id: "5cead49f-7649-410a-89ff-840cc52adf52",
        description: "",
        name: "Confirm travel",
        priority: "1",
        processInstanceId: "7e31993d-8c9a-45e8-997d-7156632a520f",
        processId: "travels",
        rootProcessInstanceId: null,
        rootProcessId: null,
        state: "Aborted",
        actualOwner: null,
        adminGroups: [],
        adminUsers: [],
        completed: "2020-02-19T09:55:52.574Z",
        started: "2020-02-19T09:55:38.81Z",
        excludedUsers: [],
        potentialGroups: [],
        potentialUsers: [],
        inputs: '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null}}',
        outputs: '{}',
        referenceName: "ConfirmTravel"
      }
    ],
  ProcessInstances: [
    {
      id: '9ae7ce3b-d49c-4f35-b843-8ac3d22fa427',
      processId: 'travels',
      parentProcessInstanceId: null,
      parentProcessInstance: null,
      processName: 'travels',
      roles: [],
      state: 'ACTIVE',
      rootProcessInstanceId: null,
      addons: ['infinispan-persistence', 'prometheus-monitoring'],
      start: '2020-02-19T11:11:56.244Z',
      end: null,
      endpoint: 'http://localhost:4000/travels'
    },
    {
      id: '9ae407dd-cdfa-4722-8a49-0a6d2e14550d',
      processId: 'travels',
      parentProcessInstanceId: null,
      parentProcessInstance: null,
      processName: 'travels',
      roles: [],
      state: 'ACTIVE',
      rootProcessInstanceId: null,
      addons: ['infinispan-persistence', 'prometheus-monitoring'],
      start: '2020-02-19T11:11:56.244Z',
      end: null,
      endpoint: 'http://localhost:4000/travels'
    },
    {
      id: '4bfdd404-c46a-4751-b401-b1428a30fa07',
      processId: 'travels',
      parentProcessInstanceId: null,
      parentProcessInstance: null,
      processName: 'travels',
      roles: [],
      state: 'COMPLETED',
      rootProcessInstanceId: null,
      addons: ['infinispan-persistence', 'prometheus-monitoring'],
      start: '2020-02-19T11:11:56.244Z',
      end: '2020-02-19T11:11:56.244Z',
      endpoint: 'http://localhost:4000/travels'
    },
    {
      id: '7e31993d-8c9a-45e8-997d-7156632a520f',
      processId: 'travels',
      parentProcessInstanceId: null,
      parentProcessInstance: null,
      processName: 'travels',
      roles: [],
      state: 'ABORTED',
      rootProcessInstanceId: null,
      addons: ['infinispan-persistence', 'prometheus-monitoring'],
      start: '2020-02-19T11:11:56.244Z',
      end: '2020-02-19T11:11:56.244Z',
      endpoint: 'http://localhost:4000/travels'
    }
  ]
};

