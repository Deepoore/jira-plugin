import IssuesExplorer from '../explorer/issues-explorer';
import ConfigurationService from './configuration.service';
import GitIntegrationService from './git-integration.service';
import LoggerService from './logger.service';
import NotificationService from './notifications.service';
import SelectValuesService from './select-values.service';
import StatusBarService from './status-bar.service';
import UtilitiesService from './utilities.service';
import CreateIssueService from './create-issue.service';

export const configuration = new ConfigurationService();
export const issuesExplorer = new IssuesExplorer();
export const logger = new LoggerService();
export const utilities = new UtilitiesService();
export const selectValues = new SelectValuesService();
export const gitIntegration = new GitIntegrationService(configuration);
export const statusBar = new StatusBarService(configuration);
export const notifications = new NotificationService(configuration);
export const createIssue = new CreateIssueService();
