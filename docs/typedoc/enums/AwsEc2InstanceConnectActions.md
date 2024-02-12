[aws-iam-policy-types](../README.md) / [Exports](../modules.md) / AwsEc2InstanceConnectActions

# Enumeration: AwsEc2InstanceConnectActions

All IAM policy actions for Amazon EC2 Instance Connect (EC2-INSTANCE-CONNECT)

Extracted by `aws-iam-policy` from
https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2instanceconnect.html

2024-02-12T09:57:05.076Z

## Table of contents

### Enumeration Members

- [OpenTunnel](AwsEc2InstanceConnectActions.md#opentunnel)
- [SendSSHPublicKey](AwsEc2InstanceConnectActions.md#sendsshpublickey)
- [SendSerialConsoleSSHPublicKey](AwsEc2InstanceConnectActions.md#sendserialconsolesshpublickey)

## Enumeration Members

### OpenTunnel

• **OpenTunnel** = ``"ec2-instance-connect:OpenTunnel"``

Grants permission to establish SSH connection to an EC2 instance using EC2 Inst
ance Connect Endpoint

See https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/permissions-for-ec2-instance-connect-endpoint.html#iam-OpenTunnel

#### Defined in

actions/ec2-instance-connect.ts:18

___

### SendSSHPublicKey

• **SendSSHPublicKey** = ``"ec2-instance-connect:SendSSHPublicKey"``

Grants permission to push an SSH public key to the specified EC2 instance to be
used for standard SSH

See https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html

#### Defined in

actions/ec2-instance-connect.ts:25

___

### SendSerialConsoleSSHPublicKey

• **SendSerialConsoleSSHPublicKey** = ``"ec2-instance-connect:SendSerialConsoleSSHPublicKey"``

Grants permission to push an SSH public key to the specified EC2 instance to be
used for serial console SSH

See https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSerialConsoleSSHPublicKey.html

#### Defined in

actions/ec2-instance-connect.ts:32
