<?php

namespace OCA\Text\Service;

use OCA\Text\AppInfo\Application;
use OCP\IAppConfig;
use OCP\IConfig;

class ConfigService {
	public function __construct(
		private IAppConfig $appConfig,
		private IConfig $config,
	) {
	}

	public function getDefaultFileExtension(): string {
		return $this->appConfig->getValueString(Application::APP_NAME, 'default_file_extension', 'md');
	}

	public function isRichEditingEnabled(): bool {
		return ($this->appConfig->getValueString(Application::APP_NAME, 'rich_editing_enabled', '1') === '1');
	}

	public function isRichWorkspaceAvailable(): bool {
		return $this->appConfig->getValueString(Application::APP_NAME, 'workspace_available', '1') === '1';
	}

	public function isRichWorkspaceEnabledForUser(?string $userId): bool {
		if ($userId === null) {
			return true;
		}
		return $this->config->getUserValue($userId, Application::APP_NAME, 'workspace_enabled', '1') === '1';
	}
}
