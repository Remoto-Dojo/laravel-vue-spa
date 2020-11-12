<?php
declare(strict_types=1);

namespace App\Services\Transformers;

use App\Models\User;
use League\Fractal;

final class UserTransformer extends Fractal\TransformerAbstract
{
    /**
     * @param User $user
     * @return array
     */
    public function transform(User $user): array
    {
        [$first_name, $last_name] = explode(" ", $user->name);

        return [
            'id' => $user->id,
            'first_name' => $first_name,
            'last_name'  => $last_name,
            'email' => $user->email,
            'created_at' => $user->created_at->toIso8601String()
        ];
    }
}
