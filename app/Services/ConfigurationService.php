<?php

namespace App\Services;

use App\Enums\Role;

class ConfigurationService
{

    public function get(): array
    {
        return [
            'navigation' => $this->getNavigation(),
        ];
    }

    private function getNavigation(): array
    {
       return [
                ['text' => __t('app.nav.dashboard'), 'route' => 'dashboard', 'icon' => 'dashboard'],
            ];
    }
}
