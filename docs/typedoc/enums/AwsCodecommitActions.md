[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsCodecommitActions

# Enumeration: AwsCodecommitActions

All IAM policy actions for AWS CodeCommit (CODECOMMIT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodecommit.html

2024-02-12T09:56:33.854Z

## Table of contents

### Enumeration Members

- [AssociateApprovalRuleTemplateWithRepository](AwsCodecommitActions.md#associateapprovalruletemplatewithrepository)
- [BatchAssociateApprovalRuleTemplateWithRepositories](AwsCodecommitActions.md#batchassociateapprovalruletemplatewithrepositories)
- [BatchDescribeMergeConflicts](AwsCodecommitActions.md#batchdescribemergeconflicts)
- [BatchDisassociateApprovalRuleTemplateFromRepositories](AwsCodecommitActions.md#batchdisassociateapprovalruletemplatefromrepositories)
- [BatchGetCommits](AwsCodecommitActions.md#batchgetcommits)
- [BatchGetPullRequests](AwsCodecommitActions.md#batchgetpullrequests)
- [BatchGetRepositories](AwsCodecommitActions.md#batchgetrepositories)
- [CancelUploadArchive](AwsCodecommitActions.md#canceluploadarchive)
- [CreateApprovalRuleTemplate](AwsCodecommitActions.md#createapprovalruletemplate)
- [CreateBranch](AwsCodecommitActions.md#createbranch)
- [CreateCommit](AwsCodecommitActions.md#createcommit)
- [CreatePullRequest](AwsCodecommitActions.md#createpullrequest)
- [CreatePullRequestApprovalRule](AwsCodecommitActions.md#createpullrequestapprovalrule)
- [CreateRepository](AwsCodecommitActions.md#createrepository)
- [CreateUnreferencedMergeCommit](AwsCodecommitActions.md#createunreferencedmergecommit)
- [DeleteApprovalRuleTemplate](AwsCodecommitActions.md#deleteapprovalruletemplate)
- [DeleteBranch](AwsCodecommitActions.md#deletebranch)
- [DeleteCommentContent](AwsCodecommitActions.md#deletecommentcontent)
- [DeleteFile](AwsCodecommitActions.md#deletefile)
- [DeletePullRequestApprovalRule](AwsCodecommitActions.md#deletepullrequestapprovalrule)
- [DeleteRepository](AwsCodecommitActions.md#deleterepository)
- [DescribeMergeConflicts](AwsCodecommitActions.md#describemergeconflicts)
- [DescribePullRequestEvents](AwsCodecommitActions.md#describepullrequestevents)
- [DisassociateApprovalRuleTemplateFromRepository](AwsCodecommitActions.md#disassociateapprovalruletemplatefromrepository)
- [EvaluatePullRequestApprovalRules](AwsCodecommitActions.md#evaluatepullrequestapprovalrules)
- [GetApprovalRuleTemplate](AwsCodecommitActions.md#getapprovalruletemplate)
- [GetBlob](AwsCodecommitActions.md#getblob)
- [GetBranch](AwsCodecommitActions.md#getbranch)
- [GetComment](AwsCodecommitActions.md#getcomment)
- [GetCommentReactions](AwsCodecommitActions.md#getcommentreactions)
- [GetCommentsForComparedCommit](AwsCodecommitActions.md#getcommentsforcomparedcommit)
- [GetCommentsForPullRequest](AwsCodecommitActions.md#getcommentsforpullrequest)
- [GetCommit](AwsCodecommitActions.md#getcommit)
- [GetCommitHistory](AwsCodecommitActions.md#getcommithistory)
- [GetCommitsFromMergeBase](AwsCodecommitActions.md#getcommitsfrommergebase)
- [GetDifferences](AwsCodecommitActions.md#getdifferences)
- [GetFile](AwsCodecommitActions.md#getfile)
- [GetFolder](AwsCodecommitActions.md#getfolder)
- [GetMergeCommit](AwsCodecommitActions.md#getmergecommit)
- [GetMergeConflicts](AwsCodecommitActions.md#getmergeconflicts)
- [GetMergeOptions](AwsCodecommitActions.md#getmergeoptions)
- [GetObjectIdentifier](AwsCodecommitActions.md#getobjectidentifier)
- [GetPullRequest](AwsCodecommitActions.md#getpullrequest)
- [GetPullRequestApprovalStates](AwsCodecommitActions.md#getpullrequestapprovalstates)
- [GetPullRequestOverrideState](AwsCodecommitActions.md#getpullrequestoverridestate)
- [GetReferences](AwsCodecommitActions.md#getreferences)
- [GetRepository](AwsCodecommitActions.md#getrepository)
- [GetRepositoryTriggers](AwsCodecommitActions.md#getrepositorytriggers)
- [GetTree](AwsCodecommitActions.md#gettree)
- [GetUploadArchiveStatus](AwsCodecommitActions.md#getuploadarchivestatus)
- [GitPull](AwsCodecommitActions.md#gitpull)
- [GitPush](AwsCodecommitActions.md#gitpush)
- [ListApprovalRuleTemplates](AwsCodecommitActions.md#listapprovalruletemplates)
- [ListAssociatedApprovalRuleTemplatesForRepository](AwsCodecommitActions.md#listassociatedapprovalruletemplatesforrepository)
- [ListBranches](AwsCodecommitActions.md#listbranches)
- [ListFileCommitHistory](AwsCodecommitActions.md#listfilecommithistory)
- [ListPullRequests](AwsCodecommitActions.md#listpullrequests)
- [ListRepositories](AwsCodecommitActions.md#listrepositories)
- [ListRepositoriesForApprovalRuleTemplate](AwsCodecommitActions.md#listrepositoriesforapprovalruletemplate)
- [ListTagsForResource](AwsCodecommitActions.md#listtagsforresource)
- [MergeBranchesByFastForward](AwsCodecommitActions.md#mergebranchesbyfastforward)
- [MergeBranchesBySquash](AwsCodecommitActions.md#mergebranchesbysquash)
- [MergeBranchesByThreeWay](AwsCodecommitActions.md#mergebranchesbythreeway)
- [MergePullRequestByFastForward](AwsCodecommitActions.md#mergepullrequestbyfastforward)
- [MergePullRequestBySquash](AwsCodecommitActions.md#mergepullrequestbysquash)
- [MergePullRequestByThreeWay](AwsCodecommitActions.md#mergepullrequestbythreeway)
- [OverridePullRequestApprovalRules](AwsCodecommitActions.md#overridepullrequestapprovalrules)
- [PostCommentForComparedCommit](AwsCodecommitActions.md#postcommentforcomparedcommit)
- [PostCommentForPullRequest](AwsCodecommitActions.md#postcommentforpullrequest)
- [PostCommentReply](AwsCodecommitActions.md#postcommentreply)
- [PutCommentReaction](AwsCodecommitActions.md#putcommentreaction)
- [PutFile](AwsCodecommitActions.md#putfile)
- [PutRepositoryTriggers](AwsCodecommitActions.md#putrepositorytriggers)
- [TagResource](AwsCodecommitActions.md#tagresource)
- [TestRepositoryTriggers](AwsCodecommitActions.md#testrepositorytriggers)
- [UntagResource](AwsCodecommitActions.md#untagresource)
- [UpdateApprovalRuleTemplateContent](AwsCodecommitActions.md#updateapprovalruletemplatecontent)
- [UpdateApprovalRuleTemplateDescription](AwsCodecommitActions.md#updateapprovalruletemplatedescription)
- [UpdateApprovalRuleTemplateName](AwsCodecommitActions.md#updateapprovalruletemplatename)
- [UpdateComment](AwsCodecommitActions.md#updatecomment)
- [UpdateDefaultBranch](AwsCodecommitActions.md#updatedefaultbranch)
- [UpdatePullRequestApprovalRuleContent](AwsCodecommitActions.md#updatepullrequestapprovalrulecontent)
- [UpdatePullRequestApprovalState](AwsCodecommitActions.md#updatepullrequestapprovalstate)
- [UpdatePullRequestDescription](AwsCodecommitActions.md#updatepullrequestdescription)
- [UpdatePullRequestStatus](AwsCodecommitActions.md#updatepullrequeststatus)
- [UpdatePullRequestTitle](AwsCodecommitActions.md#updatepullrequesttitle)
- [UpdateRepositoryDescription](AwsCodecommitActions.md#updaterepositorydescription)
- [UpdateRepositoryEncryptionKey](AwsCodecommitActions.md#updaterepositoryencryptionkey)
- [UpdateRepositoryName](AwsCodecommitActions.md#updaterepositoryname)
- [UploadArchive](AwsCodecommitActions.md#uploadarchive)

## Enumeration Members

### AssociateApprovalRuleTemplateWithRepository

• **AssociateApprovalRuleTemplateWithRepository** = ``"codecommit:AssociateApprovalRuleTemplateWithRepository"``

Grants permission to associate an approval rule template with a repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_AssociateApprovalRuleTemplateWithRepository.html

#### Defined in

actions/codecommit.ts:17

___

### BatchAssociateApprovalRuleTemplateWithRepositories

• **BatchAssociateApprovalRuleTemplateWithRepositories** = ``"codecommit:BatchAssociateApprovalRuleTemplateWithRepositories"``

Grants permission to associate an approval rule template with multiple reposito
ries in a single operation

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchAssociateApprovalRuleTemplateWithRepositories.html

#### Defined in

actions/codecommit.ts:24

___

### BatchDescribeMergeConflicts

• **BatchDescribeMergeConflicts** = ``"codecommit:BatchDescribeMergeConflicts"``

Grants permission to get information about multiple merge conflicts when attemp
ting to merge two commits using either the three-way merge or the squash merge
option

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchDescribeMergeConflicts.html

#### Defined in

actions/codecommit.ts:32

___

### BatchDisassociateApprovalRuleTemplateFromRepositories

• **BatchDisassociateApprovalRuleTemplateFromRepositories** = ``"codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories"``

Grants permission to remove the association between an approval rule template a
nd multiple repositories in a single operation

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchDisassociateApprovalRuleTemplateFromRepositories.html

#### Defined in

actions/codecommit.ts:39

___

### BatchGetCommits

• **BatchGetCommits** = ``"codecommit:BatchGetCommits"``

Grants permission to return information about one or more commits in an AWS Cod
eCommit repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchGetCommits.html

#### Defined in

actions/codecommit.ts:46

___

### BatchGetPullRequests

• **BatchGetPullRequests** = ``"codecommit:BatchGetPullRequests"``

Grants permission to return information about one or more pull requests in an A
WS CodeCommit repository

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-pr

#### Defined in

actions/codecommit.ts:53

___

### BatchGetRepositories

• **BatchGetRepositories** = ``"codecommit:BatchGetRepositories"``

Grants permission to get information about multiple repositories

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchGetRepositories.html

#### Defined in

actions/codecommit.ts:59

___

### CancelUploadArchive

• **CancelUploadArchive** = ``"codecommit:CancelUploadArchive"``

Grants permission to cancel the uploading of an archive to a pipeline in AWS Co
dePipeline

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp

#### Defined in

actions/codecommit.ts:66

___

### CreateApprovalRuleTemplate

• **CreateApprovalRuleTemplate** = ``"codecommit:CreateApprovalRuleTemplate"``

Grants permission to create an approval rule template that will automatically c
reate approval rules in pull requests that match the conditions defined in the
template; does not grant permission to create approval rules for individual pul
l requests

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateApprovalRuleTemplate.html

#### Defined in

actions/codecommit.ts:75

___

### CreateBranch

• **CreateBranch** = ``"codecommit:CreateBranch"``

Grants permission to create a branch in an AWS CodeCommit repository with this
API; does not control Git create branch actions

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateBranch.html

#### Defined in

actions/codecommit.ts:82

___

### CreateCommit

• **CreateCommit** = ``"codecommit:CreateCommit"``

Grants permission to add, copy, move or update single or multiple files in a br
anch in an AWS CodeCommit repository, and generate a commit for the changes in
the specified branch

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateCommit.html

#### Defined in

actions/codecommit.ts:90

___

### CreatePullRequest

• **CreatePullRequest** = ``"codecommit:CreatePullRequest"``

Grants permission to create a pull request in the specified repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreatePullRequest.html

#### Defined in

actions/codecommit.ts:96

___

### CreatePullRequestApprovalRule

• **CreatePullRequestApprovalRule** = ``"codecommit:CreatePullRequestApprovalRule"``

Grants permission to create an approval rule specific to an individual pull req
uest; does not grant permission to create approval rule templates

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreatePullRequestApprovalRule.html

#### Defined in

actions/codecommit.ts:103

___

### CreateRepository

• **CreateRepository** = ``"codecommit:CreateRepository"``

Grants permission to create an AWS CodeCommit repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateRepository.html

#### Defined in

actions/codecommit.ts:109

___

### CreateUnreferencedMergeCommit

• **CreateUnreferencedMergeCommit** = ``"codecommit:CreateUnreferencedMergeCommit"``

Grants permission to create an unreferenced commit that contains the result of
merging two commits using either the three-way or the squash merge option; does
not control Git merge actions

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateUnreferencedMergeCommit.html

#### Defined in

actions/codecommit.ts:117

___

### DeleteApprovalRuleTemplate

• **DeleteApprovalRuleTemplate** = ``"codecommit:DeleteApprovalRuleTemplate"``

Grants permission to delete an approval rule template

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteApprovalRuleTemplate.html

#### Defined in

actions/codecommit.ts:123

___

### DeleteBranch

• **DeleteBranch** = ``"codecommit:DeleteBranch"``

Grants permission to delete a branch in an AWS CodeCommit repository with this
API; does not control Git delete branch actions

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteBranch.html

#### Defined in

actions/codecommit.ts:130

___

### DeleteCommentContent

• **DeleteCommentContent** = ``"codecommit:DeleteCommentContent"``

Grants permission to delete the content of a comment made on a change, file, or
commit in a repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteCommentContent.html

#### Defined in

actions/codecommit.ts:137

___

### DeleteFile

• **DeleteFile** = ``"codecommit:DeleteFile"``

Grants permission to delete a specified file from a specified branch

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteFile.html

#### Defined in

actions/codecommit.ts:143

___

### DeletePullRequestApprovalRule

• **DeletePullRequestApprovalRule** = ``"codecommit:DeletePullRequestApprovalRule"``

Grants permission to delete approval rule created for a pull request if the rul
e was not created by an approval rule template

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeletePullRequestApprovalRule.html

#### Defined in

actions/codecommit.ts:150

___

### DeleteRepository

• **DeleteRepository** = ``"codecommit:DeleteRepository"``

Grants permission to delete an AWS CodeCommit repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteRepository.html

#### Defined in

actions/codecommit.ts:156

___

### DescribeMergeConflicts

• **DescribeMergeConflicts** = ``"codecommit:DescribeMergeConflicts"``

Grants permission to get information about specific merge conflicts when attemp
ting to merge two commits using either the three-way or the squash merge option

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DescribeMergeConflicts.html

#### Defined in

actions/codecommit.ts:163

___

### DescribePullRequestEvents

• **DescribePullRequestEvents** = ``"codecommit:DescribePullRequestEvents"``

Grants permission to return information about one or more pull request events

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DescribePullRequestEvents.html

#### Defined in

actions/codecommit.ts:169

___

### DisassociateApprovalRuleTemplateFromRepository

• **DisassociateApprovalRuleTemplateFromRepository** = ``"codecommit:DisassociateApprovalRuleTemplateFromRepository"``

Grants permission to remove the association between an approval rule template a
nd a repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DisassociateApprovalRuleTemplateFromRepository.html

#### Defined in

actions/codecommit.ts:176

___

### EvaluatePullRequestApprovalRules

• **EvaluatePullRequestApprovalRules** = ``"codecommit:EvaluatePullRequestApprovalRules"``

Grants permission to evaluate whether a pull request is mergable based on its c
urrent approval state and approval rule requirements

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_EvaluatePullRequestApprovalRules.html

#### Defined in

actions/codecommit.ts:183

___

### GetApprovalRuleTemplate

• **GetApprovalRuleTemplate** = ``"codecommit:GetApprovalRuleTemplate"``

Grants permission to return information about an approval rule template

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetApprovalRuleTemplate.html

#### Defined in

actions/codecommit.ts:189

___

### GetBlob

• **GetBlob** = ``"codecommit:GetBlob"``

Grants permission to view the encoded content of an individual file in an AWS C
odeCommit repository from the AWS CodeCommit console

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetBlob.html

#### Defined in

actions/codecommit.ts:196

___

### GetBranch

• **GetBranch** = ``"codecommit:GetBranch"``

Grants permission to get details about a branch in an AWS CodeCommit repository
with this API; does not control Git branch actions

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetBranch.html

#### Defined in

actions/codecommit.ts:203

___

### GetComment

• **GetComment** = ``"codecommit:GetComment"``

Grants permission to get the content of a comment made on a change, file, or co
mmit in a repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetComment.html

#### Defined in

actions/codecommit.ts:210

___

### GetCommentReactions

• **GetCommentReactions** = ``"codecommit:GetCommentReactions"``

Grants permission to get the reactions on a comment

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentReactions.html

#### Defined in

actions/codecommit.ts:216

___

### GetCommentsForComparedCommit

• **GetCommentsForComparedCommit** = ``"codecommit:GetCommentsForComparedCommit"``

Grants permission to get information about comments made on the comparison betw
een two commits

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentsForComparedCommit.html

#### Defined in

actions/codecommit.ts:223

___

### GetCommentsForPullRequest

• **GetCommentsForPullRequest** = ``"codecommit:GetCommentsForPullRequest"``

Grants permission to get comments made on a pull request

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentsForPullRequest.html

#### Defined in

actions/codecommit.ts:229

___

### GetCommit

• **GetCommit** = ``"codecommit:GetCommit"``

Grants permission to return information about a commit, including commit messag
e and committer information, with this API; does not control Git log actions

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommit.html

#### Defined in

actions/codecommit.ts:236

___

### GetCommitHistory

• **GetCommitHistory** = ``"codecommit:GetCommitHistory"``

Grants permission to get information about the history of commits in a reposito
ry

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code

#### Defined in

actions/codecommit.ts:243

___

### GetCommitsFromMergeBase

• **GetCommitsFromMergeBase** = ``"codecommit:GetCommitsFromMergeBase"``

Grants permission to get information about the difference between commits in th
e context of a potential merge

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-pr

#### Defined in

actions/codecommit.ts:250

___

### GetDifferences

• **GetDifferences** = ``"codecommit:GetDifferences"``

Grants permission to view information about the differences between valid commi
t specifiers such as a branch, tag, HEAD, commit ID, or other fully qualified r
eference

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetDifferences.html

#### Defined in

actions/codecommit.ts:258

___

### GetFile

• **GetFile** = ``"codecommit:GetFile"``

Grants permission to return the base-64 encoded contents of a specified file an
d its metadata

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetFile.html

#### Defined in

actions/codecommit.ts:265

___

### GetFolder

• **GetFolder** = ``"codecommit:GetFolder"``

Grants permission to return the contents of a specified folder in a repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetFolder.html

#### Defined in

actions/codecommit.ts:271

___

### GetMergeCommit

• **GetMergeCommit** = ``"codecommit:GetMergeCommit"``

Grants permission to get information about a merge commit created by one of the
merge options for pull requests that creates merge commits. Not all merge optio
ns create merge commits. This permission does not control Git merge actions

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeCommit.html

#### Defined in

actions/codecommit.ts:279

___

### GetMergeConflicts

• **GetMergeConflicts** = ``"codecommit:GetMergeConflicts"``

Grants permission to get information about merge conflicts between the before a
nd after commit IDs for a pull request in a repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeConflicts.html

#### Defined in

actions/codecommit.ts:286

___

### GetMergeOptions

• **GetMergeOptions** = ``"codecommit:GetMergeOptions"``

Grants permission to get information about merge options for pull requests that
can be used to merge two commits; does not control Git merge actions

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeOptions.html

#### Defined in

actions/codecommit.ts:293

___

### GetObjectIdentifier

• **GetObjectIdentifier** = ``"codecommit:GetObjectIdentifier"``

Grants permission to resolve blobs, trees, and commits to their identifier

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code

#### Defined in

actions/codecommit.ts:299

___

### GetPullRequest

• **GetPullRequest** = ``"codecommit:GetPullRequest"``

Grants permission to get information about a pull request in a specified reposi
tory

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequest.html

#### Defined in

actions/codecommit.ts:306

___

### GetPullRequestApprovalStates

• **GetPullRequestApprovalStates** = ``"codecommit:GetPullRequestApprovalStates"``

Grants permission to retrieve the current approvals on an inputted pull request

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequestApprovalStates.html

#### Defined in

actions/codecommit.ts:312

___

### GetPullRequestOverrideState

• **GetPullRequestOverrideState** = ``"codecommit:GetPullRequestOverrideState"``

Grants permission to retrieve the current override state of a given pull reques
t

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequestOverrideState.html

#### Defined in

actions/codecommit.ts:319

___

### GetReferences

• **GetReferences** = ``"codecommit:GetReferences"``

Grants permission to get details about references in an AWS CodeCommit reposito
ry; does not control Git reference actions

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code

#### Defined in

actions/codecommit.ts:326

___

### GetRepository

• **GetRepository** = ``"codecommit:GetRepository"``

Grants permission to get information about an AWS CodeCommit repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html

#### Defined in

actions/codecommit.ts:332

___

### GetRepositoryTriggers

• **GetRepositoryTriggers** = ``"codecommit:GetRepositoryTriggers"``

Grants permission to get information about triggers configured for a repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepositoryTriggers.html

#### Defined in

actions/codecommit.ts:338

___

### GetTree

• **GetTree** = ``"codecommit:GetTree"``

Grants permission to view the contents of a specified tree in an AWS CodeCommit
repository from the AWS CodeCommit console

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code

#### Defined in

actions/codecommit.ts:345

___

### GetUploadArchiveStatus

• **GetUploadArchiveStatus** = ``"codecommit:GetUploadArchiveStatus"``

Grants permission to get status information about an archive upload to a pipeli
ne in AWS CodePipeline

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp

#### Defined in

actions/codecommit.ts:352

___

### GitPull

• **GitPull** = ``"codecommit:GitPull"``

Grants permission to pull information from an AWS CodeCommit repository to a lo
cal repo

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-git

#### Defined in

actions/codecommit.ts:359

___

### GitPush

• **GitPush** = ``"codecommit:GitPush"``

Grants permission to push information from a local repo to an AWS CodeCommit re
pository

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-git

#### Defined in

actions/codecommit.ts:366

___

### ListApprovalRuleTemplates

• **ListApprovalRuleTemplates** = ``"codecommit:ListApprovalRuleTemplates"``

Grants permission to list all approval rule templates in an AWS Region for the
AWS account

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListApprovalRuleTemplates.html

#### Defined in

actions/codecommit.ts:373

___

### ListAssociatedApprovalRuleTemplatesForRepository

• **ListAssociatedApprovalRuleTemplatesForRepository** = ``"codecommit:ListAssociatedApprovalRuleTemplatesForRepository"``

Grants permission to list approval rule templates that are associated with a re
pository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListAssociatedApprovalRuleTemplatesForRepository.html

#### Defined in

actions/codecommit.ts:380

___

### ListBranches

• **ListBranches** = ``"codecommit:ListBranches"``

Grants permission to list branches for an AWS CodeCommit repository with this A
PI; does not control Git branch actions

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListBranches.html

#### Defined in

actions/codecommit.ts:387

___

### ListFileCommitHistory

• **ListFileCommitHistory** = ``"codecommit:ListFileCommitHistory"``

Grants permission to list commits and changes to a specified file

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListFileCommitHistory.html

#### Defined in

actions/codecommit.ts:393

___

### ListPullRequests

• **ListPullRequests** = ``"codecommit:ListPullRequests"``

Grants permission to list pull requests for a specified repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListPullRequests.html

#### Defined in

actions/codecommit.ts:399

___

### ListRepositories

• **ListRepositories** = ``"codecommit:ListRepositories"``

Grants permission to list information about AWS CodeCommit repositories in the
current Region for your AWS account

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListRepositories.html

#### Defined in

actions/codecommit.ts:406

___

### ListRepositoriesForApprovalRuleTemplate

• **ListRepositoriesForApprovalRuleTemplate** = ``"codecommit:ListRepositoriesForApprovalRuleTemplate"``

Grants permission to list repositories that are associated with an approval rul
e template

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListRepositoriesForApprovalRuleTemplate.html

#### Defined in

actions/codecommit.ts:413

___

### ListTagsForResource

• **ListTagsForResource** = ``"codecommit:ListTagsForResource"``

Grants permission to list the resource attached to a CodeCommit resource ARN

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListTagsForResource.html

#### Defined in

actions/codecommit.ts:419

___

### MergeBranchesByFastForward

• **MergeBranchesByFastForward** = ``"codecommit:MergeBranchesByFastForward"``

Grants permission to merge two commits into the specified destination branch us
ing the fast-forward merge option

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesByFastForward.html

#### Defined in

actions/codecommit.ts:426

___

### MergeBranchesBySquash

• **MergeBranchesBySquash** = ``"codecommit:MergeBranchesBySquash"``

Grants permission to merge two commits into the specified destination branch us
ing the squash merge option

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesBySquash.html

#### Defined in

actions/codecommit.ts:433

___

### MergeBranchesByThreeWay

• **MergeBranchesByThreeWay** = ``"codecommit:MergeBranchesByThreeWay"``

Grants permission to merge two commits into the specified destination branch us
ing the three-way merge option

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesByThreeWay.html

#### Defined in

actions/codecommit.ts:440

___

### MergePullRequestByFastForward

• **MergePullRequestByFastForward** = ``"codecommit:MergePullRequestByFastForward"``

Grants permission to close a pull request and attempt to merge it into the spec
ified destination branch for that pull request at the specified commit using th
e fast-forward merge option

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestByFastForward.html

#### Defined in

actions/codecommit.ts:448

___

### MergePullRequestBySquash

• **MergePullRequestBySquash** = ``"codecommit:MergePullRequestBySquash"``

Grants permission to close a pull request and attempt to merge it into the spec
ified destination branch for that pull request at the specified commit using th
e squash merge option

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestBySquash.html

#### Defined in

actions/codecommit.ts:456

___

### MergePullRequestByThreeWay

• **MergePullRequestByThreeWay** = ``"codecommit:MergePullRequestByThreeWay"``

Grants permission to close a pull request and attempt to merge it into the spec
ified destination branch for that pull request at the specified commit using th
e three-way merge option

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestByThreeWay.html

#### Defined in

actions/codecommit.ts:464

___

### OverridePullRequestApprovalRules

• **OverridePullRequestApprovalRules** = ``"codecommit:OverridePullRequestApprovalRules"``

Grants permission to override all approval rules for a pull request, including
approval rules created by a template

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_OverridePullRequestApprovalRules.html

#### Defined in

actions/codecommit.ts:471

___

### PostCommentForComparedCommit

• **PostCommentForComparedCommit** = ``"codecommit:PostCommentForComparedCommit"``

Grants permission to post a comment on the comparison between two commits

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentForComparedCommit.html

#### Defined in

actions/codecommit.ts:477

___

### PostCommentForPullRequest

• **PostCommentForPullRequest** = ``"codecommit:PostCommentForPullRequest"``

Grants permission to post a comment on a pull request

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentForPullRequest.html

#### Defined in

actions/codecommit.ts:483

___

### PostCommentReply

• **PostCommentReply** = ``"codecommit:PostCommentReply"``

Grants permission to post a comment in reply to a comment on a comparison betwe
en commits or a pull request

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentReply.html

#### Defined in

actions/codecommit.ts:490

___

### PutCommentReaction

• **PutCommentReaction** = ``"codecommit:PutCommentReaction"``

Grants permission to post a reaction on a comment

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutCommentReaction.html

#### Defined in

actions/codecommit.ts:496

___

### PutFile

• **PutFile** = ``"codecommit:PutFile"``

Grants permission to add or update a file in a branch in an AWS CodeCommit repo
sitory, and generate a commit for the addition in the specified branch

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutFile.html

#### Defined in

actions/codecommit.ts:503

___

### PutRepositoryTriggers

• **PutRepositoryTriggers** = ``"codecommit:PutRepositoryTriggers"``

Grants permission to create, update, or delete triggers for a repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutRepositoryTriggers.html

#### Defined in

actions/codecommit.ts:509

___

### TagResource

• **TagResource** = ``"codecommit:TagResource"``

Grants permission to attach resource tags to a CodeCommit resource ARN

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_TagResource.html

#### Defined in

actions/codecommit.ts:515

___

### TestRepositoryTriggers

• **TestRepositoryTriggers** = ``"codecommit:TestRepositoryTriggers"``

Grants permission to test the functionality of repository triggers by sending i
nformation to the trigger target

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_TestRepositoryTriggers.html

#### Defined in

actions/codecommit.ts:522

___

### UntagResource

• **UntagResource** = ``"codecommit:UntagResource"``

Grants permission to disassociate resource tags from a CodeCommit resource ARN

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UntagResource.html

#### Defined in

actions/codecommit.ts:528

___

### UpdateApprovalRuleTemplateContent

• **UpdateApprovalRuleTemplateContent** = ``"codecommit:UpdateApprovalRuleTemplateContent"``

Grants permission to update the content of approval rule templates; does not gr
ant permission to update content of approval rules created specifically for pul
l requests

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateContent.html

#### Defined in

actions/codecommit.ts:536

___

### UpdateApprovalRuleTemplateDescription

• **UpdateApprovalRuleTemplateDescription** = ``"codecommit:UpdateApprovalRuleTemplateDescription"``

Grants permission to update the description of approval rule templates

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateDescription.html

#### Defined in

actions/codecommit.ts:542

___

### UpdateApprovalRuleTemplateName

• **UpdateApprovalRuleTemplateName** = ``"codecommit:UpdateApprovalRuleTemplateName"``

Grants permission to update the name of approval rule templates

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateName.html

#### Defined in

actions/codecommit.ts:548

___

### UpdateComment

• **UpdateComment** = ``"codecommit:UpdateComment"``

Grants permission to update the contents of a comment if the identity matches t
he identity used to create the comment

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateComment.html

#### Defined in

actions/codecommit.ts:555

___

### UpdateDefaultBranch

• **UpdateDefaultBranch** = ``"codecommit:UpdateDefaultBranch"``

Grants permission to change the default branch in an AWS CodeCommit repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateDefaultBranch.html

#### Defined in

actions/codecommit.ts:561

___

### UpdatePullRequestApprovalRuleContent

• **UpdatePullRequestApprovalRuleContent** = ``"codecommit:UpdatePullRequestApprovalRuleContent"``

Grants permission to update the content for approval rules created for a specif
ic pull requests; does not grant permission to update approval rule content for
rules created with an approval rule template

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestApprovalRuleContent.html

#### Defined in

actions/codecommit.ts:569

___

### UpdatePullRequestApprovalState

• **UpdatePullRequestApprovalState** = ``"codecommit:UpdatePullRequestApprovalState"``

Grants permission to update the approval state for pull requests

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestApprovalState.html

#### Defined in

actions/codecommit.ts:575

___

### UpdatePullRequestDescription

• **UpdatePullRequestDescription** = ``"codecommit:UpdatePullRequestDescription"``

Grants permission to update the description of a pull request

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestDescription.html

#### Defined in

actions/codecommit.ts:581

___

### UpdatePullRequestStatus

• **UpdatePullRequestStatus** = ``"codecommit:UpdatePullRequestStatus"``

Grants permission to update the status of a pull request

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestStatus.html

#### Defined in

actions/codecommit.ts:587

___

### UpdatePullRequestTitle

• **UpdatePullRequestTitle** = ``"codecommit:UpdatePullRequestTitle"``

Grants permission to update the title of a pull request

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestTitle.html

#### Defined in

actions/codecommit.ts:593

___

### UpdateRepositoryDescription

• **UpdateRepositoryDescription** = ``"codecommit:UpdateRepositoryDescription"``

Grants permission to change the description of an AWS CodeCommit repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryDescription.html

#### Defined in

actions/codecommit.ts:599

___

### UpdateRepositoryEncryptionKey

• **UpdateRepositoryEncryptionKey** = ``"codecommit:UpdateRepositoryEncryptionKey"``

Grants permission to change the AWS KMS encryption key used to encrypt and decr
ypt an AWS CodeCommit repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryEncryptionKey.html

#### Defined in

actions/codecommit.ts:606

___

### UpdateRepositoryName

• **UpdateRepositoryName** = ``"codecommit:UpdateRepositoryName"``

Grants permission to change the name of an AWS CodeCommit repository

See https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryName.html

#### Defined in

actions/codecommit.ts:612

___

### UploadArchive

• **UploadArchive** = ``"codecommit:UploadArchive"``

Grants permission to the service role for AWS CodePipeline to upload repository
changes into a pipeline

See https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp

#### Defined in

actions/codecommit.ts:619
