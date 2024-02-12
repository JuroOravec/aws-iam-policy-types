// AUTOGENERATED FILE - DO NOT EDIT

/**
 * All IAM policy actions for AWS IoT Device Tester (IOT-DEVICE-TESTER)
 *
 * Extracted by `aws-iam-policy` from
 * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotdevicetester.html
 *
 * 2024-02-12T09:57:48.728Z
 */
export enum AwsIotDeviceTesterActions {
  /**
   * Grants permission to IoT Device Tester to check if a given set of product, test
   * suite and device tester version are compatible
   *
   * See https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  CheckVersion = 'iot-device-tester:CheckVersion',
  /**
   * Grants permission to IoT Device Tester to download compatible test suite versio
   * ns
   *
   * See https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  DownloadTestSuite = 'iot-device-tester:DownloadTestSuite',
  /**
   * Grants permission to IoT Device Tester to get information on latest version of
   * device tester available
   *
   * See https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  LatestIdt = 'iot-device-tester:LatestIdt',
  /**
   * Grants permission to IoT Device Tester to send usage metrics on your behalf
   *
   * See https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  SendMetrics = 'iot-device-tester:SendMetrics',
  /**
   * Grants permission to IoT Device Tester to get list of supported products and te
   * st suite versions
   *
   * See https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  SupportedVersion = 'iot-device-tester:SupportedVersion',
}