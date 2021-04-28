#import "SetupViewController.h"
#import <WindowsAzureMessaging/WindowsAzureMessaging.h>
#import <UserNotifications/UserNotifications.h>

 static NSString *const kNHMessageReceived = @"MessageReceived";

 @interface SetupViewController () <MSNotificationHubDelegate>

 @end

 @implementation SetupViewController

 - (void)viewDidLoad {
     [super viewDidLoad];

     // Listen for messages using NSNotificationCenter
     [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(didReceivePushNotification:) name:kNHMessageReceived object:nil];
 }

 - (void)dealloc {
     // Clean up subscription to NSNotificationCenter
     [[NSNotificationCenter defaultCenter] removeObserver:self name:kNHMessageReceived object:nil];
 }

 - (void)didReceivePushNotification:(NSNotification *)notification {
     MSNotificationHubMessage *message = [notification.userInfo objectForKey:@"message"];

     // Create UI Alert controller with message title and body
     UIAlertController *alertController = [UIAlertController alertControllerWithTitle:message.title
                          message:message.body
                   preferredStyle:UIAlertControllerStyleAlert];
     [alertController addAction:[UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleCancel handler:nil]];
     [self presentViewController:alertController animated:YES completion:nil];

     // Dismiss after 2 seconds
     dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2.0 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
         [alertController dismissViewControllerAnimated:YES completion: nil];
     });

 }

 @end
