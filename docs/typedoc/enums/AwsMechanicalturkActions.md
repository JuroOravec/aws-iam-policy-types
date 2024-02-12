[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsMechanicalturkActions

# Enumeration: AwsMechanicalturkActions

All IAM policy actions for Amazon Mechanical Turk (MECHANICALTURK)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmechanicalturk.html

2024-02-12T09:58:21.412Z

## Table of contents

### Enumeration Members

- [AcceptQualificationRequest](AwsMechanicalturkActions.md#acceptqualificationrequest)
- [ApproveAssignment](AwsMechanicalturkActions.md#approveassignment)
- [AssociateQualificationWithWorker](AwsMechanicalturkActions.md#associatequalificationwithworker)
- [CreateAdditionalAssignmentsForHIT](AwsMechanicalturkActions.md#createadditionalassignmentsforhit)
- [CreateHIT](AwsMechanicalturkActions.md#createhit)
- [CreateHITType](AwsMechanicalturkActions.md#createhittype)
- [CreateHITWithHITType](AwsMechanicalturkActions.md#createhitwithhittype)
- [CreateQualificationType](AwsMechanicalturkActions.md#createqualificationtype)
- [CreateWorkerBlock](AwsMechanicalturkActions.md#createworkerblock)
- [DeleteHIT](AwsMechanicalturkActions.md#deletehit)
- [DeleteQualificationType](AwsMechanicalturkActions.md#deletequalificationtype)
- [DeleteWorkerBlock](AwsMechanicalturkActions.md#deleteworkerblock)
- [DisassociateQualificationFromWorker](AwsMechanicalturkActions.md#disassociatequalificationfromworker)
- [GetAccountBalance](AwsMechanicalturkActions.md#getaccountbalance)
- [GetAssignment](AwsMechanicalturkActions.md#getassignment)
- [GetFileUploadURL](AwsMechanicalturkActions.md#getfileuploadurl)
- [GetHIT](AwsMechanicalturkActions.md#gethit)
- [GetQualificationScore](AwsMechanicalturkActions.md#getqualificationscore)
- [GetQualificationType](AwsMechanicalturkActions.md#getqualificationtype)
- [ListAssignmentsForHIT](AwsMechanicalturkActions.md#listassignmentsforhit)
- [ListBonusPayments](AwsMechanicalturkActions.md#listbonuspayments)
- [ListHITs](AwsMechanicalturkActions.md#listhits)
- [ListHITsForQualificationType](AwsMechanicalturkActions.md#listhitsforqualificationtype)
- [ListQualificationRequests](AwsMechanicalturkActions.md#listqualificationrequests)
- [ListQualificationTypes](AwsMechanicalturkActions.md#listqualificationtypes)
- [ListReviewPolicyResultsForHIT](AwsMechanicalturkActions.md#listreviewpolicyresultsforhit)
- [ListReviewableHITs](AwsMechanicalturkActions.md#listreviewablehits)
- [ListWorkerBlocks](AwsMechanicalturkActions.md#listworkerblocks)
- [ListWorkersWithQualificationType](AwsMechanicalturkActions.md#listworkerswithqualificationtype)
- [NotifyWorkers](AwsMechanicalturkActions.md#notifyworkers)
- [RejectAssignment](AwsMechanicalturkActions.md#rejectassignment)
- [RejectQualificationRequest](AwsMechanicalturkActions.md#rejectqualificationrequest)
- [SendBonus](AwsMechanicalturkActions.md#sendbonus)
- [SendTestEventNotification](AwsMechanicalturkActions.md#sendtesteventnotification)
- [UpdateExpirationForHIT](AwsMechanicalturkActions.md#updateexpirationforhit)
- [UpdateHITReviewStatus](AwsMechanicalturkActions.md#updatehitreviewstatus)
- [UpdateHITTypeOfHIT](AwsMechanicalturkActions.md#updatehittypeofhit)
- [UpdateNotificationSettings](AwsMechanicalturkActions.md#updatenotificationsettings)
- [UpdateQualificationType](AwsMechanicalturkActions.md#updatequalificationtype)

## Enumeration Members

### AcceptQualificationRequest

• **AcceptQualificationRequest** = ``"mechanicalturk:AcceptQualificationRequest"``

The AcceptQualificationRequest operation grants a Worker's request for a Qualif
ication

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_AcceptQualificationRequestOperation.html

#### Defined in

actions/mechanicalturk.ts:18

___

### ApproveAssignment

• **ApproveAssignment** = ``"mechanicalturk:ApproveAssignment"``

The ApproveAssignment operation approves the results of a completed assignment

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ApproveAssignmentOperation.html

#### Defined in

actions/mechanicalturk.ts:24

___

### AssociateQualificationWithWorker

• **AssociateQualificationWithWorker** = ``"mechanicalturk:AssociateQualificationWithWorker"``

The AssociateQualificationWithWorker operation gives a Worker a Qualification

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_AssociateQualificationWithWorkerOperation.html

#### Defined in

actions/mechanicalturk.ts:30

___

### CreateAdditionalAssignmentsForHIT

• **CreateAdditionalAssignmentsForHIT** = ``"mechanicalturk:CreateAdditionalAssignmentsForHIT"``

The CreateAdditionalAssignmentsForHIT operation increases the maximum number of
assignments of an existing HIT

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateAdditionalAssignmentsForHITOperation.html

#### Defined in

actions/mechanicalturk.ts:37

___

### CreateHIT

• **CreateHIT** = ``"mechanicalturk:CreateHIT"``

The CreateHIT operation creates a new HIT (Human Intelligence Task)

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITOperation.html

#### Defined in

actions/mechanicalturk.ts:43

___

### CreateHITType

• **CreateHITType** = ``"mechanicalturk:CreateHITType"``

The CreateHITType operation creates a new HIT type

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITTypeOperation.html

#### Defined in

actions/mechanicalturk.ts:49

___

### CreateHITWithHITType

• **CreateHITWithHITType** = ``"mechanicalturk:CreateHITWithHITType"``

The CreateHITWithHITType operation creates a new Human Intelligence Task (HIT)
using an existing HITTypeID generated by the CreateHITType operation

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateHITWithHITTypeOperation.html

#### Defined in

actions/mechanicalturk.ts:56

___

### CreateQualificationType

• **CreateQualificationType** = ``"mechanicalturk:CreateQualificationType"``

The CreateQualificationType operation creates a new Qualification type, which i
s represented by a QualificationType data structure

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateQualificationTypeOperation.html

#### Defined in

actions/mechanicalturk.ts:63

___

### CreateWorkerBlock

• **CreateWorkerBlock** = ``"mechanicalturk:CreateWorkerBlock"``

The CreateWorkerBlock operation allows you to prevent a Worker from working on
your HITs

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_CreateWorkerBlockOperation.html

#### Defined in

actions/mechanicalturk.ts:70

___

### DeleteHIT

• **DeleteHIT** = ``"mechanicalturk:DeleteHIT"``

The DeleteHIT operation disposes of a HIT that is no longer needed

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteHITOperation.html

#### Defined in

actions/mechanicalturk.ts:76

___

### DeleteQualificationType

• **DeleteQualificationType** = ``"mechanicalturk:DeleteQualificationType"``

The DeleteQualificationType disposes a Qualification type and disposes any HIT
types that are associated with the Qualification type

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteQualificationTypeOperation.html

#### Defined in

actions/mechanicalturk.ts:83

___

### DeleteWorkerBlock

• **DeleteWorkerBlock** = ``"mechanicalturk:DeleteWorkerBlock"``

The DeleteWorkerBlock operation allows you to reinstate a blocked Worker to wor
k on your HITs

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DeleteWorkerBlockOperation.html

#### Defined in

actions/mechanicalturk.ts:90

___

### DisassociateQualificationFromWorker

• **DisassociateQualificationFromWorker** = ``"mechanicalturk:DisassociateQualificationFromWorker"``

The DisassociateQualificationFromWorker revokes a previously granted Qualificat
ion from a user

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_DisassociateQualificationFromWorkerOperation.html

#### Defined in

actions/mechanicalturk.ts:97

___

### GetAccountBalance

• **GetAccountBalance** = ``"mechanicalturk:GetAccountBalance"``

The GetAccountBalance operation retrieves the amount of money in your Amazon Me
chanical Turk account

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetAccountBalanceOperation.html

#### Defined in

actions/mechanicalturk.ts:104

___

### GetAssignment

• **GetAssignment** = ``"mechanicalturk:GetAssignment"``

The GetAssignment retrieves an assignment with an AssignmentStatus value of Sub
mitted, Approved, or Rejected, using the assignment's ID

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetAssignmentOperation.html

#### Defined in

actions/mechanicalturk.ts:111

___

### GetFileUploadURL

• **GetFileUploadURL** = ``"mechanicalturk:GetFileUploadURL"``

The GetFileUploadURL operation generates and returns a temporary URL

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetFileUploadURLOperation.html

#### Defined in

actions/mechanicalturk.ts:117

___

### GetHIT

• **GetHIT** = ``"mechanicalturk:GetHIT"``

The GetHIT operation retrieves the details of the specified HIT

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetHITOperation.html

#### Defined in

actions/mechanicalturk.ts:123

___

### GetQualificationScore

• **GetQualificationScore** = ``"mechanicalturk:GetQualificationScore"``

The GetQualificationScore operation returns the value of a Worker's Qualificati
on for a given Qualification type

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetQualificationScoreOperation.html

#### Defined in

actions/mechanicalturk.ts:130

___

### GetQualificationType

• **GetQualificationType** = ``"mechanicalturk:GetQualificationType"``

The GetQualificationType operation retrieves information about a Qualification
type using its ID

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_GetQualificationTypeOperation.html

#### Defined in

actions/mechanicalturk.ts:137

___

### ListAssignmentsForHIT

• **ListAssignmentsForHIT** = ``"mechanicalturk:ListAssignmentsForHIT"``

The ListAssignmentsForHIT operation retrieves completed assignments for a HIT

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListAssignmentsForHITOperation.html

#### Defined in

actions/mechanicalturk.ts:143

___

### ListBonusPayments

• **ListBonusPayments** = ``"mechanicalturk:ListBonusPayments"``

The ListBonusPayments operation retrieves the amounts of bonuses you have paid
to Workers for a given HIT or assignment

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListBonusPaymentsOperation.html

#### Defined in

actions/mechanicalturk.ts:150

___

### ListHITs

• **ListHITs** = ``"mechanicalturk:ListHITs"``

The ListHITs operation returns all of a Requester's HITs

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListHITsOperation.html

#### Defined in

actions/mechanicalturk.ts:156

___

### ListHITsForQualificationType

• **ListHITsForQualificationType** = ``"mechanicalturk:ListHITsForQualificationType"``

The ListHITsForQualificationType operation returns the HITs that use the given
QualififcationType for a QualificationRequirement

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListHITsForQualificationTypeOperation.html

#### Defined in

actions/mechanicalturk.ts:163

___

### ListQualificationRequests

• **ListQualificationRequests** = ``"mechanicalturk:ListQualificationRequests"``

The ListQualificationRequests operation retrieves requests for Qualifications o
f a particular Qualification type

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListQualificationRequestsOperation.html

#### Defined in

actions/mechanicalturk.ts:170

___

### ListQualificationTypes

• **ListQualificationTypes** = ``"mechanicalturk:ListQualificationTypes"``

The ListQualificationTypes operation searches for Qualification types using the
specified search query, and returns a list of Qualification types

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListQualificationTypesOperation.html

#### Defined in

actions/mechanicalturk.ts:177

___

### ListReviewPolicyResultsForHIT

• **ListReviewPolicyResultsForHIT** = ``"mechanicalturk:ListReviewPolicyResultsForHIT"``

The ListReviewPolicyResultsForHIT operation retrieves the computed results and
the actions taken in the course of executing your Review Policies during a Crea
teHIT operation

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListReviewPolicyResultsForHITOperation.html

#### Defined in

actions/mechanicalturk.ts:185

___

### ListReviewableHITs

• **ListReviewableHITs** = ``"mechanicalturk:ListReviewableHITs"``

The ListReviewableHITs operation returns all of a Requester's HITs that have no
t been approved or rejected

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListReviewableHITsOperation.html

#### Defined in

actions/mechanicalturk.ts:192

___

### ListWorkerBlocks

• **ListWorkerBlocks** = ``"mechanicalturk:ListWorkerBlocks"``

The ListWorkersBlocks operation retrieves a list of Workers who are blocked fro
m working on your HITs

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListWorkerBlocksOperation.html

#### Defined in

actions/mechanicalturk.ts:199

___

### ListWorkersWithQualificationType

• **ListWorkersWithQualificationType** = ``"mechanicalturk:ListWorkersWithQualificationType"``

The ListWorkersWithQualificationType operation returns all of the Workers with
a given Qualification type

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ListWorkersWithQualificationTypeOperation.html

#### Defined in

actions/mechanicalturk.ts:206

___

### NotifyWorkers

• **NotifyWorkers** = ``"mechanicalturk:NotifyWorkers"``

The NotifyWorkers operation sends an email to one or more Workers that you spec
ify with the Worker ID

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_NotifyWorkersOperation.html

#### Defined in

actions/mechanicalturk.ts:213

___

### RejectAssignment

• **RejectAssignment** = ``"mechanicalturk:RejectAssignment"``

The RejectAssignment operation rejects the results of a completed assignment

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_RejectAssignmentOperation.html

#### Defined in

actions/mechanicalturk.ts:219

___

### RejectQualificationRequest

• **RejectQualificationRequest** = ``"mechanicalturk:RejectQualificationRequest"``

The RejectQualificationRequest operation rejects a user's request for a Qualifi
cation

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_RejectQualificationRequestOperation.html

#### Defined in

actions/mechanicalturk.ts:226

___

### SendBonus

• **SendBonus** = ``"mechanicalturk:SendBonus"``

The SendBonus operation issues a payment of money from your account to a Worker

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_SendBonusOperation.html

#### Defined in

actions/mechanicalturk.ts:232

___

### SendTestEventNotification

• **SendTestEventNotification** = ``"mechanicalturk:SendTestEventNotification"``

The SendTestEventNotification operation causes Amazon Mechanical Turk to send a
notification message as if a HIT event occurred, according to the provided noti
fication specification

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_SendTestEventNotificationOperation.html

#### Defined in

actions/mechanicalturk.ts:240

___

### UpdateExpirationForHIT

• **UpdateExpirationForHIT** = ``"mechanicalturk:UpdateExpirationForHIT"``

The UpdateExpirationForHIT operation allows you extend the expiration time of a
HIT beyond is current expiration or expire a HIT immediately

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateExpirationForHITOperation.html

#### Defined in

actions/mechanicalturk.ts:247

___

### UpdateHITReviewStatus

• **UpdateHITReviewStatus** = ``"mechanicalturk:UpdateHITReviewStatus"``

The UpdateHITReviewStatus operation toggles the status of a HIT

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateHITReviewStatusOperation.html

#### Defined in

actions/mechanicalturk.ts:253

___

### UpdateHITTypeOfHIT

• **UpdateHITTypeOfHIT** = ``"mechanicalturk:UpdateHITTypeOfHIT"``

The UpdateHITTypeOfHIT operation allows you to change the HITType properties of
a HIT

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateHITTypeOfHITOperation.html

#### Defined in

actions/mechanicalturk.ts:260

___

### UpdateNotificationSettings

• **UpdateNotificationSettings** = ``"mechanicalturk:UpdateNotificationSettings"``

The UpdateNotificationSettings operation creates, updates, disables or re-enabl
es notifications for a HIT type

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateNotificationSettingsOperation.html

#### Defined in

actions/mechanicalturk.ts:267

___

### UpdateQualificationType

• **UpdateQualificationType** = ``"mechanicalturk:UpdateQualificationType"``

The UpdateQualificationType operation modifies the attributes of an existing Qu
alification type, which is represented by a QualificationType data structure

See https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_UpdateQualificationTypeOperation.html

#### Defined in

actions/mechanicalturk.ts:274
