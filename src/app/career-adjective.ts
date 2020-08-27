import { SmallTextListDataModel, LargeTextListDataModel, SingleLargeTextModel } from './about';

export class CareerAdjective {
id:number;
personalQualities:SmallTextListDataModel[];
skillsByTopic:SmallTextListDataModel[]; 
briefAboutMe:LargeTextListDataModel[];
myWorkFeatures:SmallTextListDataModel[];
currentFocus:SmallTextListDataModel[];
onlineResumeLink:SingleLargeTextModel;
detailsList:LargeTextListDataModel[]; 
}
