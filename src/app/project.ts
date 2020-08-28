import { SingleLargeTextModel, SingleDateModel, SmallTextListDataModel, LargeTextListDataModel, SingleSmallTextModel } from './about';

export class Project {
id:number;
technologyType:SmallTextListDataModel[];
images:SmallTextListDataModel[];
projectName:SingleSmallTextModel;
projectSubName:SingleSmallTextModel;
projectBrief:LargeTextListDataModel[];
projectKeyPoints:LargeTextListDataModel[];
projectTechnologyBrief:LargeTextListDataModel[];
projectTechnologies:SmallTextListDataModel[];
projectTechnologiesIcons:SmallTextListDataModel[];
projectLiveLink:SingleLargeTextModel;
projectSourceLink:SingleLargeTextModel;
dateCreated:SingleDateModel;
oneSingleBriefForWholeProject:SingleLargeTextModel;
}
