/**
 *  Theorical discipline controller test
 */

describe("Test TheoricalDisciplineController", function(){
	
	beforeEach(module("projectApp"));
	
	var scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		
		controller = $controller("theoricalDisciplineController", {
			$scope: scope,
			$isTest: true,
			PeolpeTimeService: 
			{
				inicioPeopleHour: function(){return 276.56;},
				elaboracionPeopleHour: function(){return 1106.26;},
				construccionPeopleHour: function(){return 3595.34;},
				transicionPeopleHour: function(){return 553.13;},
				proyectoPeopleHour: function(){return 5531.29;},
				
				inicioPeopleDay: function(){return 34.57;},
				elaboracionPeopleDay: function(){return 138.28;},
				construccionPeopleDay: function(){return 449.42;},
				transicionPeopleDay: function(){return 69.14;},
				proyectoPeopleDay: function(){return 691.41;},
				
				inicioPeopleMonth: function(){return 1.65;},
				elaboracionPeopleMonth: function(){return 6.58;},
				construccionPeopleMonth: function(){return 21.40;},
				transicionPeopleMonth: function(){return 3.29;},
				proyectoPeopleMonth: function(){return 32.92;},
			}
		});
	}));
	
	/************************Personas-hora******************************/
	//Fase de Inicio
	it("Inital hours for project management should be 38.7", function(){
		expect(scope.initialProjectManagmentHour()).toBe(38.7);
	});
	
	it("Inital hours for requirements should be 105.1", function(){
		expect(scope.initialRequirementsHour()).toBe(105.1);
	});
	
	it("Inital hours for analysis should be 52.5", function(){
		expect(scope.initialAnalysisHour()).toBe(52.5);
	});

	it("Inital hours for implementation should be 22.1", function(){
		expect(scope.initialImplementationHour()).toBe(22.1);
	});
	
	it("Inital hours for test should be 22.1", function(){
		expect(scope.initialTestsHour()).toBe(22.1);
	});
	
	it("Inital hours for deployment should be 8.3", function(){
		expect(scope.initialDeploymentHour()).toBe(8.3);
	});
	
	it("Inital hours for environment should be 27.7", function(){
		expect(scope.initialVersionHour()).toBe(27.7);
	});
	
	it("Inital total hours should be 276.6", function(){
		expect(scope.totalInitialHour()).toBe(276.6);
	});
	
	//Fase de elaboracion
	
	it("Elaboration hours for project management should be 132.8", function(){
		expect(scope.elaborationProjectManagmentHour()).toBe(132.8);
	});
	
	it("Elaboration hours for requirements should be 199.1", function(){
		expect(scope.elaborationRequirementsHour()).toBe(199.1);
	});
	
	it("Elaboration hours for analysis should be 398.3", function(){
		expect(scope.elaborationAnalysisHour()).toBe(398.3);
	});

	it("Elaboration hours for implementation should be 143.8", function(){
		expect(scope.elaborationImplementationHour()).toBe(143.8);
	});
	
	it("Elaboration hours for test should be 110.6", function(){
		expect(scope.elaborationTestsHour()).toBe(110.6);
	});
	
	it("Elaboration hours for deployment should be 33.2", function(){
		expect(scope.elaborationDeploymentHour()).toBe(33.2);
	});
	
	it("Elaboration hours for environment should be 88.5", function(){
		expect(scope.elaborationVersionHour()).toBe(88.5);
	});
	
	it("Elaboration total hours should be 1106.3", function(){
		expect(scope.totalElaborationHour()).toBe(1106.3);
	});
	
	//Fase de construccion
	it("Construction hours for project management should be 359.5", function(){
		expect(scope.constructionProjectManagmentHour()).toBe(359.5);
	});
	
	it("Construction hours for requirements should be 287.6", function(){
		expect(scope.constructionRequirementsHour()).toBe(287.6);
	});
	
	it("Construction hours for analysis should be 575.3", function(){
		expect(scope.constructionAnalysisHour()).toBe(575.3);
	});

	it("Construction hours for implementation should be 1222.4", function(){
		expect(scope.constructionImplementationHour()).toBe(1222.4);
	});
	
	it("Construction hours for test should be 862.9", function(){
		expect(scope.constructionTestsHour()).toBe(862.9);
	});
	
	it("Construction hours for deployment should be 107.9", function(){
		expect(scope.constructionDeploymentHour()).toBe(107.9);
	});
	
	it("Construction hours for environment should be 179.8", function(){
		expect(scope.constructionVersionHour()).toBe(179.8);
	});
	
	it("Construction total hours should be 3595.3", function(){
		expect(scope.totalConstructionHour()).toBe(3595.3);
	});
	
	//Fase de transicion
	it("Transition hours for project management should be 77.4", function(){
		expect(scope.transitionProjectManagmentHour()).toBe(77.4);
	});
	
	it("Transition hours for requirements should be 22.1", function(){
		expect(scope.transitionRequirementsHour()).toBe(22.1);
	});
	
	it("Transition hours for analysis should be 22.1", function(){
		expect(scope.transitionAnalysisHour()).toBe(22.1);
	});

	it("Transition hours for implementation should be 105.1", function(){
		expect(scope.transitionImplementationHour()).toBe(105.1);
	});
	
	it("Transition hours for test should be 132.8", function(){
		expect(scope.transitionTestsHour()).toBe(132.8);
	});
	
	it("Transition hours for deployment should be 165.9", function(){
		expect(scope.transitionDeploymentHour()).toBe(165.9);
	});
	
	it("Transition hours for environment should be 27.7", function(){
		expect(scope.transitionVersionHour()).toBe(27.7);
	});
	
	it("Transition total hours should be 553.1", function(){
		expect(scope.totalTransitionHour()).toBe(553.1);
	});
	
	//Totales de proyecto
	it("Project hours for project management should be 608.4", function(){
		expect(scope.projectManagmentHour()).toBe(608.4);
	});
	
	it("Project hours for requirements should be 614", function(){
		expect(scope.projectRequirementsHour()).toBe(614);
	});
	
	it("Project hours for analysis should be 1048.2", function(){
		expect(scope.projectAnalysisHour()).toBe(1048.2);
	});

	it("Project hours for implementation should be 1493.4", function(){
		expect(scope.projectImplementationHour()).toBe(1493.4);
	});
	
	it("Project hours for test should be 1128.4", function(){
		expect(scope.projectTestsHour()).toBe(1128.4);
	});
	
	it("Project hours for deployment should be 315.3", function(){
		expect(scope.projectDeploymentHour()).toBe(315.3);
	});
	
	it("Project hours for environment should be 323.6", function(){
		expect(scope.projectVersionHour()).toBe(323.6);
	});
	
	it("Project total hours should be 5531.3", function(){
		expect(scope.totalprojectHour()).toBe(5531.3);
	});
	
	/************************Personas-dia******************************/
	//Fase de Inicio
	it("Inital days for project management should be 4.8", function(){
		expect(scope.initialProjectManagmentDay()).toBe(4.8);
	});
	
	it("Inital hours for requirements should be 13.1", function(){
		expect(scope.initialRequirementsDay()).toBe(13.1);
	});
	
	it("Inital days for analysis should be 6.6", function(){
		expect(scope.initialAnalysisDay()).toBe(6.6);
	});

	it("Inital days for implementation should be 2.8", function(){
		expect(scope.initialImplementationDay()).toBe(2.8);
	});
	
	it("Inital days for test should be 2.8", function(){
		expect(scope.initialTestsDay()).toBe(2.8);
	});
	
	it("Inital Days for deployment should be 1", function(){
		expect(scope.initialDeploymentDay()).toBe(1);
	});
	
	it("Inital Days for environment should be 3.5", function(){
		expect(scope.initialVersionDay()).toBe(3.5);
	});
	
	it("Inital total Days should be 34.6", function(){
		expect(scope.totalInitialDay()).toBe(34.6);
	});
	
	//Fase de elaboracion
	
	it("Elaboration Days for project management should be 16.6", function(){
		expect(scope.elaborationProjectManagmentDay()).toBe(16.6);
	});
	
	it("Elaboration Days for requirements should be 24.9", function(){
		expect(scope.elaborationRequirementsDay()).toBe(24.9);
	});
	
	it("Elaboration Days for analysis should be 49.8", function(){
		expect(scope.elaborationAnalysisDay()).toBe(49.8);
	});

	it("Elaboration Days for implementation should be 18", function(){
		expect(scope.elaborationImplementationDay()).toBe(18);
	});
	
	it("Elaboration Days for test should be 13.8", function(){
		expect(scope.elaborationTestsDay()).toBe(13.8);
	});
	
	it("Elaboration Days for deployment should be 4.1", function(){
		expect(scope.elaborationDeploymentDay()).toBe(4.1);
	});
	
	it("Elaboration Days for environment should be 11.1", function(){
		expect(scope.elaborationVersionDay()).toBe(11.1);
	});
	
	it("Elaboration total Days should be 138.3", function(){
		expect(scope.totalElaborationDay()).toBe(138.3);
	});
	
	//Fase de construccion
	it("Construction Days for project management should be 44.9", function(){
		expect(scope.constructionProjectManagmentDay()).toBe(44.9);
	});
	
	it("Construction Days for requirements should be 36", function(){
		expect(scope.constructionRequirementsDay()).toBe(36);
	});
	
	it("Construction Days for analysis should be 71.9", function(){
		expect(scope.constructionAnalysisDay()).toBe(71.9);
	});

	it("Construction Days for implementation should be 152.8", function(){
		expect(scope.constructionImplementationDay()).toBe(152.8);
	});
	
	it("Construction Days for test should be 107.9", function(){
		expect(scope.constructionTestsDay()).toBe(107.9);
	});
	
	it("Construction Days for deployment should be 13.5", function(){
		expect(scope.constructionDeploymentDay()).toBe(13.5);
	});
	
	it("Construction Days for environment should be 22.5", function(){
		expect(scope.constructionVersionDay()).toBe(22.5);
	});
	
	it("Construction total Days should be 449.4", function(){
		expect(scope.totalConstructionDay()).toBe(449.4);
	});
	
	//Fase de transicion
	it("Transition Days for project management should be 9.7", function(){
		expect(scope.transitionProjectManagmentDay()).toBe(9.7);
	});
	
	it("Transition Days for requirements should be 2.8", function(){
		expect(scope.transitionRequirementsDay()).toBe(2.8);
	});
	
	it("Transition Days for analysis should be 2.8", function(){
		expect(scope.transitionAnalysisDay()).toBe(2.8);
	});

	it("Transition Days for implementation should be 13.1", function(){
		expect(scope.transitionImplementationDay()).toBe(13.1);
	});
	
	it("Transition Days for test should be 16.6", function(){
		expect(scope.transitionTestsDay()).toBe(16.6);
	});
	
	it("Transition Days for deployment should be 20.7", function(){
		expect(scope.transitionDeploymentDay()).toBe(20.7);
	});
	
	it("Transition Days for environment should be 3.5", function(){
		expect(scope.transitionVersionDay()).toBe(3.5);
	});
	
	it("Transition total Days should be 69.1", function(){
		expect(scope.totalTransitionDay()).toBe(69.1);
	});
	
	//Totales de proyecto
	it("Project Days for project management should be 76.1", function(){
		expect(scope.projectProjectManagmentDay()).toBe(76.1);
	});
	
	it("Project Days for requirements should be 76.7", function(){
		expect(scope.projectRequirementsDay()).toBe(76.7);
	});
	
	it("Project Days for analysis should be 131", function(){
		expect(scope.projectAnalysisDay()).toBe(131);
	});

	it("Project Days for implementation should be 186.7", function(){
		expect(scope.projectImplementationDay()).toBe(186.7);
	});
	
	it("Project Days for test should be 141", function(){
		expect(scope.projectTestsDay()).toBe(141);
	});
	
	it("Project Days for deployment should be 39.4", function(){
		expect(scope.projectDeploymentDay()).toBe(39.4);
	});
	
	it("Project Days for environment should be 40.4", function(){
		expect(scope.projectVersionDay()).toBe(40.4);
	});
	
	it("Project total Days should be 691.4", function(){
		expect(scope.totalprojectDay()).toBe(691.4);
	});
	
	/************************Personas-mes******************************/
	//Fase de Inicio
	it("Inital Months for project management should be 0.23", function(){
		expect(scope.initialProjectManagmentMonth()).toBe(0.23);
	});
	
	it("Inital hours for requirements should be 0.63", function(){
		expect(scope.initialRequirementsMonth()).toBe(0.63);
	});
	
	it("Inital Months for analysis should be 0.31", function(){
		expect(scope.initialAnalysisMonth()).toBe(0.31);
	});

	it("Inital Months for implementation should be 0.13", function(){
		expect(scope.initialImplementationMonth()).toBe(0.13);
	});
	
	it("Inital Months for test should be 0.13", function(){
		expect(scope.initialTestsMonth()).toBe(0.13);
	});
	
	it("Inital Months for deployment should be 0.05", function(){
		expect(scope.initialDeploymentMonth()).toBe(0.05);
	});
	
	it("Inital Months for environment should be 0.16", function(){
		expect(scope.initialVersionMonth()).toBe(0.16);
	});
	
	it("Inital total Months should be 1.6", function(){
		expect(scope.totalInitialMonth()).toBe(1.6);
	});
	
	//Fase de elaboracion
	
	it("Elaboration Months for project management should be 0.79", function(){
		expect(scope.elaborationProjectManagmentMonth()).toBe(0.79);
	});
	
	it("Elaboration Months for requirements should be 1.19", function(){
		expect(scope.elaborationRequirementsMonth()).toBe(1.19);
	});
	
	it("Elaboration Months for analysis should be 2.37", function(){
		expect(scope.elaborationAnalysisMonth()).toBe(2.37);
	});

	it("Elaboration Months for implementation should be 0.86", function(){
		expect(scope.elaborationImplementationMonth()).toBe(0.86);
	});
	
	it("Elaboration Months for test should be 0.66", function(){
		expect(scope.elaborationTestsMonth()).toBe(0.66);
	});
	
	it("Elaboration Months for deployment should be 0.2", function(){
		expect(scope.elaborationDeploymentMonth()).toBe(0.2);
	});
	
	it("Elaboration Months for environment should be 0.53", function(){
		expect(scope.elaborationVersionMonth()).toBe(0.53);
	});
	
	it("Elaboration total Months should be 6.6", function(){
		expect(scope.totalElaborationMonth()).toBe(6.6);
	});
	
	//Fase de construccion
	it("Construction Months for project management should be 2.14", function(){
		expect(scope.constructionProjectManagmentMonth()).toBe(2.14);
	});
	
	it("Construction Months for requirements should be 1.71", function(){
		expect(scope.constructionRequirementsMonth()).toBe(1.71);
	});
	
	it("Construction Months for analysis should be 3.42", function(){
		expect(scope.constructionAnalysisMonth()).toBe(3.42);
	});

	it("Construction Months for implementation should be 7.28", function(){
		expect(scope.constructionImplementationMonth()).toBe(7.28);
	});
	
	it("Construction Months for test should be 5.14", function(){
		expect(scope.constructionTestsMonth()).toBe(5.14);
	});
	
	it("Construction Months for deployment should be 0.64", function(){
		expect(scope.constructionDeploymentMonth()).toBe(0.64);
	});
	
	it("Construction Months for environment should be 1.07", function(){
		expect(scope.constructionVersionMonth()).toBe(1.07);
	});
	
	it("Construction total Months should be 21.4", function(){
		expect(scope.totalConstructionMonth()).toBe(21.4);
	});
	
	//Fase de transicion
	it("Transition Months for project management should be 0.46", function(){
		expect(scope.transitionProjectManagmentMonth()).toBe(0.46);
	});
	
	it("Transition Months for requirements should be 0.13", function(){
		expect(scope.transitionRequirementsMonth()).toBe(0.13);
	});
	
	it("Transition Months for analysis should be 0.13", function(){
		expect(scope.transitionAnalysisMonth()).toBe(0.13);
	});

	it("Transition Months for implementation should be 0.63", function(){
		expect(scope.transitionImplementationMonth()).toBe(0.63);
	});
	
	it("Transition Months for test should be 0.79", function(){
		expect(scope.transitionTestsMonth()).toBe(0.79);
	});
	
	it("Transition Months for deployment should be 0.99", function(){
		expect(scope.transitionDeploymentMonth()).toBe(0.99);
	});
	
	it("Transition Months for environment should be 0.16", function(){
		expect(scope.transitionVersionMonth()).toBe(0.16);
	});
	
	it("Transition total Months should be 3.3", function(){
		expect(scope.totalTransitionMonth()).toBe(3.3);
	});
	
	//Totales de proyecto
	it("Project Months for project management should be 3.62", function(){
		expect(scope.projectProjectManagmentMonth()).toBe(3.62);
	});
	
	it("Project Months for requirements should be 3.65", function(){
		expect(scope.projectRequirementsMonth()).toBe(3.65);
	});
	
	it("Project Months for analysis should be 6.24", function(){
		expect(scope.projectAnalysisMonth()).toBe(6.24);
	});

	it("Project Months for implementation should be 8.89", function(){
		expect(scope.projectImplementationMonth()).toBe(8.89);
	});
	
	it("Project Months for test should be 6.72", function(){
		expect(scope.projectTestsMonth()).toBe(6.72);
	});
	
	it("Project Months for deployment should be 1.88", function(){
		expect(scope.projectDeploymentMonth()).toBe(1.88);
	});
	
	it("Project Months for environment should be 1.93", function(){
		expect(scope.projectVersionMonth()).toBe(1.93);
	});
	
	it("Project total Months should be 32.9", function(){
		expect(scope.totalProjectMonth()).toBe(32.9);
	});
	
});