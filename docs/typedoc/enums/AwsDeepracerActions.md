[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsDeepracerActions

# Enumeration: AwsDeepracerActions

All IAM policy actions for AWS DeepRacer (DEEPRACER)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepracer.html

2024-02-12T09:56:56.343Z

## Table of contents

### Enumeration Members

- [AddLeaderboardAccessPermission](AwsDeepracerActions.md#addleaderboardaccesspermission)
- [AdminGetAccountConfig](AwsDeepracerActions.md#admingetaccountconfig)
- [AdminListAssociatedResources](AwsDeepracerActions.md#adminlistassociatedresources)
- [AdminListAssociatedUsers](AwsDeepracerActions.md#adminlistassociatedusers)
- [AdminManageUser](AwsDeepracerActions.md#adminmanageuser)
- [AdminSetAccountConfig](AwsDeepracerActions.md#adminsetaccountconfig)
- [CloneReinforcementLearningModel](AwsDeepracerActions.md#clonereinforcementlearningmodel)
- [CreateCar](AwsDeepracerActions.md#createcar)
- [CreateLeaderboard](AwsDeepracerActions.md#createleaderboard)
- [CreateLeaderboardAccessToken](AwsDeepracerActions.md#createleaderboardaccesstoken)
- [CreateLeaderboardSubmission](AwsDeepracerActions.md#createleaderboardsubmission)
- [CreateReinforcementLearningModel](AwsDeepracerActions.md#createreinforcementlearningmodel)
- [DeleteLeaderboard](AwsDeepracerActions.md#deleteleaderboard)
- [DeleteModel](AwsDeepracerActions.md#deletemodel)
- [EditLeaderboard](AwsDeepracerActions.md#editleaderboard)
- [GetAccountConfig](AwsDeepracerActions.md#getaccountconfig)
- [GetAlias](AwsDeepracerActions.md#getalias)
- [GetAssetUrl](AwsDeepracerActions.md#getasseturl)
- [GetCar](AwsDeepracerActions.md#getcar)
- [GetCars](AwsDeepracerActions.md#getcars)
- [GetEvaluation](AwsDeepracerActions.md#getevaluation)
- [GetLatestUserSubmission](AwsDeepracerActions.md#getlatestusersubmission)
- [GetLeaderboard](AwsDeepracerActions.md#getleaderboard)
- [GetModel](AwsDeepracerActions.md#getmodel)
- [GetPrivateLeaderboard](AwsDeepracerActions.md#getprivateleaderboard)
- [GetRankedUserSubmission](AwsDeepracerActions.md#getrankedusersubmission)
- [GetTrack](AwsDeepracerActions.md#gettrack)
- [GetTrainingJob](AwsDeepracerActions.md#gettrainingjob)
- [ImportModel](AwsDeepracerActions.md#importmodel)
- [ListEvaluations](AwsDeepracerActions.md#listevaluations)
- [ListLeaderboardEvaluations](AwsDeepracerActions.md#listleaderboardevaluations)
- [ListLeaderboardSubmissions](AwsDeepracerActions.md#listleaderboardsubmissions)
- [ListLeaderboards](AwsDeepracerActions.md#listleaderboards)
- [ListModels](AwsDeepracerActions.md#listmodels)
- [ListPrivateLeaderboardParticipants](AwsDeepracerActions.md#listprivateleaderboardparticipants)
- [ListPrivateLeaderboards](AwsDeepracerActions.md#listprivateleaderboards)
- [ListSubscribedPrivateLeaderboards](AwsDeepracerActions.md#listsubscribedprivateleaderboards)
- [ListTagsForResource](AwsDeepracerActions.md#listtagsforresource)
- [ListTracks](AwsDeepracerActions.md#listtracks)
- [ListTrainingJobs](AwsDeepracerActions.md#listtrainingjobs)
- [MigrateModels](AwsDeepracerActions.md#migratemodels)
- [PerformLeaderboardOperation](AwsDeepracerActions.md#performleaderboardoperation)
- [RemoveLeaderboardAccessPermission](AwsDeepracerActions.md#removeleaderboardaccesspermission)
- [SetAlias](AwsDeepracerActions.md#setalias)
- [StartEvaluation](AwsDeepracerActions.md#startevaluation)
- [StopEvaluation](AwsDeepracerActions.md#stopevaluation)
- [StopTrainingReinforcementLearningModel](AwsDeepracerActions.md#stoptrainingreinforcementlearningmodel)
- [TagResource](AwsDeepracerActions.md#tagresource)
- [TestRewardFunction](AwsDeepracerActions.md#testrewardfunction)
- [UntagResource](AwsDeepracerActions.md#untagresource)
- [UpdateCar](AwsDeepracerActions.md#updatecar)

## Enumeration Members

### AddLeaderboardAccessPermission

• **AddLeaderboardAccessPermission** = ``"deepracer:AddLeaderboardAccessPermission"``

Grants permission to add access for a private leaderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html

#### Defined in

actions/deepracer.ts:17

___

### AdminGetAccountConfig

• **AdminGetAccountConfig** = ``"deepracer:AdminGetAccountConfig"``

Grants permission to get current admin multiuser configuration for this account

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html

#### Defined in

actions/deepracer.ts:23

___

### AdminListAssociatedResources

• **AdminListAssociatedResources** = ``"deepracer:AdminListAssociatedResources"``

Grants permission to list all deepracer users with their associated resources c
reated under this account

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-list-associated-resources.html

#### Defined in

actions/deepracer.ts:30

___

### AdminListAssociatedUsers

• **AdminListAssociatedUsers** = ``"deepracer:AdminListAssociatedUsers"``

Grants permission to list user data for all users associated with this account

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-list-associated-users.html

#### Defined in

actions/deepracer.ts:36

___

### AdminManageUser

• **AdminManageUser** = ``"deepracer:AdminManageUser"``

Grants permission to manage a user associated with this account

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-manage-user.html

#### Defined in

actions/deepracer.ts:42

___

### AdminSetAccountConfig

• **AdminSetAccountConfig** = ``"deepracer:AdminSetAccountConfig"``

Grants permission to set configuration options for this account

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html

#### Defined in

actions/deepracer.ts:48

___

### CloneReinforcementLearningModel

• **CloneReinforcementLearningModel** = ``"deepracer:CloneReinforcementLearningModel"``

Grants permission to clone an existing DeepRacer model

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-clone-trained-model

#### Defined in

actions/deepracer.ts:54

___

### CreateCar

• **CreateCar** = ``"deepracer:CreateCar"``

Grants permission to create a DeepRacer car in your garage

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html

#### Defined in

actions/deepracer.ts:60

___

### CreateLeaderboard

• **CreateLeaderboard** = ``"deepracer:CreateLeaderboard"``

Grants permission to create a leaderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-create-community-race.html

#### Defined in

actions/deepracer.ts:66

___

### CreateLeaderboardAccessToken

• **CreateLeaderboardAccessToken** = ``"deepracer:CreateLeaderboardAccessToken"``

Grants permission to create an access token for a private leaderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html

#### Defined in

actions/deepracer.ts:72

___

### CreateLeaderboardSubmission

• **CreateLeaderboardSubmission** = ``"deepracer:CreateLeaderboardSubmission"``

Grants permission to submit a DeepRacer model to be evaluated for leaderboards

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:78

___

### CreateReinforcementLearningModel

• **CreateReinforcementLearningModel** = ``"deepracer:CreateReinforcementLearningModel"``

Grants permission to create ra einforcement learning model for DeepRacer

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html

#### Defined in

actions/deepracer.ts:84

___

### DeleteLeaderboard

• **DeleteLeaderboard** = ``"deepracer:DeleteLeaderboard"``

Grants permission to delete a leaderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html

#### Defined in

actions/deepracer.ts:90

___

### DeleteModel

• **DeleteModel** = ``"deepracer:DeleteModel"``

Grants permission to delete a DeepRacer model

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html

#### Defined in

actions/deepracer.ts:96

___

### EditLeaderboard

• **EditLeaderboard** = ``"deepracer:EditLeaderboard"``

Grants permission to edit a leaderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html

#### Defined in

actions/deepracer.ts:102

___

### GetAccountConfig

• **GetAccountConfig** = ``"deepracer:GetAccountConfig"``

Grants permission to get current multiuser configuration for this account

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html

#### Defined in

actions/deepracer.ts:108

___

### GetAlias

• **GetAlias** = ``"deepracer:GetAlias"``

Grants permission to retrieve the user's alias for submitting a DeepRacer model
to leaderboards

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:115

___

### GetAssetUrl

• **GetAssetUrl** = ``"deepracer:GetAssetUrl"``

Grants permission to download artifacts for an existing DeepRacer model

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html

#### Defined in

actions/deepracer.ts:121

___

### GetCar

• **GetCar** = ``"deepracer:GetCar"``

Grants permission to retrieve a specific DeepRacer car from your garage

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html

#### Defined in

actions/deepracer.ts:127

___

### GetCars

• **GetCars** = ``"deepracer:GetCars"``

Grants permission to view all the DeepRacer cars in your garage

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html

#### Defined in

actions/deepracer.ts:133

___

### GetEvaluation

• **GetEvaluation** = ``"deepracer:GetEvaluation"``

Grants permission to retrieve information about an existing DeepRacer model's e
valuation jobs

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html

#### Defined in

actions/deepracer.ts:140

___

### GetLatestUserSubmission

• **GetLatestUserSubmission** = ``"deepracer:GetLatestUserSubmission"``

Grants permission to retrieve information about how the latest submitted DeepRa
cer model for a user performed on a leaderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:147

___

### GetLeaderboard

• **GetLeaderboard** = ``"deepracer:GetLeaderboard"``

Grants permission to retrieve information about leaderboards

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:153

___

### GetModel

• **GetModel** = ``"deepracer:GetModel"``

Grants permission to retrieve information about an existing DeepRacer model

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html

#### Defined in

actions/deepracer.ts:159

___

### GetPrivateLeaderboard

• **GetPrivateLeaderboard** = ``"deepracer:GetPrivateLeaderboard"``

Grants permission to retrieve information about private leaderboards

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html

#### Defined in

actions/deepracer.ts:165

___

### GetRankedUserSubmission

• **GetRankedUserSubmission** = ``"deepracer:GetRankedUserSubmission"``

Grants permission to retrieve information about the performance of a user's Dee
pRacer model that got placed on a leaderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:172

___

### GetTrack

• **GetTrack** = ``"deepracer:GetTrack"``

Grants permission to retrieve information about DeepRacer tracks

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html

#### Defined in

actions/deepracer.ts:178

___

### GetTrainingJob

• **GetTrainingJob** = ``"deepracer:GetTrainingJob"``

Grants permission to retrieve information about an existing DeepRacer model's t
raining job

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html

#### Defined in

actions/deepracer.ts:185

___

### ImportModel

• **ImportModel** = ``"deepracer:ImportModel"``

Grants permission to import a reinforcement learning model for DeepRacer

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-troubleshooting-service-migration-errors.html

#### Defined in

actions/deepracer.ts:191

___

### ListEvaluations

• **ListEvaluations** = ``"deepracer:ListEvaluations"``

Grants permission to list a DeepRacer model's evaluation jobs

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html

#### Defined in

actions/deepracer.ts:197

___

### ListLeaderboardEvaluations

• **ListLeaderboardEvaluations** = ``"deepracer:ListLeaderboardEvaluations"``

Grants permission to list all the user's leaderboard evaluation jobs for a lead
erboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:204

___

### ListLeaderboardSubmissions

• **ListLeaderboardSubmissions** = ``"deepracer:ListLeaderboardSubmissions"``

Grants permission to list all the DeepRacer model submissions of a user on a le
aderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:211

___

### ListLeaderboards

• **ListLeaderboards** = ``"deepracer:ListLeaderboards"``

Grants permission to list all the available leaderboards

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:217

___

### ListModels

• **ListModels** = ``"deepracer:ListModels"``

Grants permission to list all existing DeepRacer models

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html

#### Defined in

actions/deepracer.ts:223

___

### ListPrivateLeaderboardParticipants

• **ListPrivateLeaderboardParticipants** = ``"deepracer:ListPrivateLeaderboardParticipants"``

Grants permission to retrieve participant information about private leaderboard
s

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html

#### Defined in

actions/deepracer.ts:230

___

### ListPrivateLeaderboards

• **ListPrivateLeaderboards** = ``"deepracer:ListPrivateLeaderboards"``

Grants permission to list all the available private leaderboards

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html

#### Defined in

actions/deepracer.ts:236

___

### ListSubscribedPrivateLeaderboards

• **ListSubscribedPrivateLeaderboards** = ``"deepracer:ListSubscribedPrivateLeaderboards"``

Grants permission to list all the subscribed private leaderboards

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html

#### Defined in

actions/deepracer.ts:242

___

### ListTagsForResource

• **ListTagsForResource** = ``"deepracer:ListTagsForResource"``

Grants permission to lists tag for a resource

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html

#### Defined in

actions/deepracer.ts:248

___

### ListTracks

• **ListTracks** = ``"deepracer:ListTracks"``

Grants permission to list all DeepRacer tracks

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html

#### Defined in

actions/deepracer.ts:254

___

### ListTrainingJobs

• **ListTrainingJobs** = ``"deepracer:ListTrainingJobs"``

Grants permission to list a DeepRacer model's training jobs

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html

#### Defined in

actions/deepracer.ts:260

___

### MigrateModels

• **MigrateModels** = ``"deepracer:MigrateModels"``

Grants permission to migrate previous reinforcement learning models for DeepRac
er

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-troubleshooting-service-migration-errors.html

#### Defined in

actions/deepracer.ts:267

___

### PerformLeaderboardOperation

• **PerformLeaderboardOperation** = ``"deepracer:PerformLeaderboardOperation"``

Grants permission to performs the leaderboard operation mentioned in the operat
ion attribute

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-perform-leaderboard-operation.html

#### Defined in

actions/deepracer.ts:274

___

### RemoveLeaderboardAccessPermission

• **RemoveLeaderboardAccessPermission** = ``"deepracer:RemoveLeaderboardAccessPermission"``

Grants permission to remove access for a private leaderboard

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html

#### Defined in

actions/deepracer.ts:280

___

### SetAlias

• **SetAlias** = ``"deepracer:SetAlias"``

Grants permission to set the user's alias for submitting a DeepRacer model to l
eaderboards

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html

#### Defined in

actions/deepracer.ts:287

___

### StartEvaluation

• **StartEvaluation** = ``"deepracer:StartEvaluation"``

Grants permission to evaluate a DeepRacer model in a simulated environment

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html

#### Defined in

actions/deepracer.ts:293

___

### StopEvaluation

• **StopEvaluation** = ``"deepracer:StopEvaluation"``

Grants permission to stop DeepRacer model evaluations

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html

#### Defined in

actions/deepracer.ts:299

___

### StopTrainingReinforcementLearningModel

• **StopTrainingReinforcementLearningModel** = ``"deepracer:StopTrainingReinforcementLearningModel"``

Grants permission to stop training a DeepRacer model

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html

#### Defined in

actions/deepracer.ts:305

___

### TagResource

• **TagResource** = ``"deepracer:TagResource"``

Grants permission to tag a resource

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html

#### Defined in

actions/deepracer.ts:311

___

### TestRewardFunction

• **TestRewardFunction** = ``"deepracer:TestRewardFunction"``

Grants permission to test reward functions for correctness

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-train-models-define-reward-function

#### Defined in

actions/deepracer.ts:317

___

### UntagResource

• **UntagResource** = ``"deepracer:UntagResource"``

Grants permission to untag a resource

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html

#### Defined in

actions/deepracer.ts:323

___

### UpdateCar

• **UpdateCar** = ``"deepracer:UpdateCar"``

Grants permission to update a DeepRacer car in your garage

See https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html

#### Defined in

actions/deepracer.ts:329
